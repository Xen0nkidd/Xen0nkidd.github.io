# Email auth API – reset tokens

## Token rules (required)

When a user requests a password reset:

1. Generate a **new random token every time** (even if they already have one).
2. Token must be **exactly 20 characters**.
3. Use a mix of letters and numbers (URL-safe).
4. Store it hashed or plain with an expiry (~1 hour).
5. **Invalidate / replace** any previous reset token for that user.
6. Email **both** the link and the raw token.

### Example token
`K7mP2xQ9nR4vL8wB3tY6`  (20 chars, random each request)

### Email body

```
Subject: Reset your Xenon password

You requested a password reset.

Open this link:
https://xen0nkidd.github.io/reset.html?token=K7mP2xQ9nR4vL8wB3tY6

Or go to https://xen0nkidd.github.io/reset.html
and paste this token:

K7mP2xQ9nR4vL8wB3tY6

This token expires in 1 hour.
If you did not request this, ignore this email.
```

---

## Endpoints

### POST /api/auth/forgot-password
Body: `{ "email": "user@example.com" }`

- Find user by email  
- Create **new** 20-char token (overwrite any old one)  
- Save token + expiry on user  
- Send email with link + token  
- Always respond: `{ "ok": true }`

### POST /api/auth/reset-password
Body: `{ "token": "K7mP2xQ9nR4vL8wB3tY6", "password": "newpass123" }`

- Find user by token  
- Check not expired  
- Set new password  
- **Delete** the token (one-time use)  
- Respond `{ "ok": true }` or `{ "error": "Invalid or expired token" }`

### POST /api/auth/register
Body: `{ "username", "password", "email" }` — email required

### POST /api/auth/add-email
Body: `{ "username", "email" }` — attach email without login

---

## Node.js / Express example (Railway)

```js
const crypto = require("crypto");

// 20-character URL-safe random token
function makeResetToken() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  const bytes = crypto.randomBytes(20);
  let out = "";
  for (let i = 0; i < 20; i++) {
    out += chars[bytes[i] % chars.length];
  }
  return out;
}

// POST /api/auth/forgot-password
app.post("/api/auth/forgot-password", async (req, res) => {
  const email = (req.body?.email || "").trim().toLowerCase();
  // Always return ok so we don't leak which emails exist
  res.json({ ok: true });

  if (!email) return;

  const user = await db.users.findOne({ email });
  if (!user) return;

  const token = makeResetToken(); // NEW 20-char token every request
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await db.users.updateOne(
    { _id: user._id },
    { $set: { resetToken: token, resetTokenExpires: expires } }
  );

  const site = "https://xen0nkidd.github.io"; // your GitHub Pages URL
  const link = `${site}/reset.html?token=${token}`;

  await sendEmail({
    to: email,
    subject: "Reset your Xenon password",
    text: [
      "You requested a password reset.",
      "",
      "Open this link:",
      link,
      "",
      "Or go to " + site + "/reset.html",
      "and paste this token:",
      "",
      token,
      "",
      "This token expires in 1 hour.",
      "If you did not request this, ignore this email.",
    ].join("\n"),
  });
});

// POST /api/auth/reset-password
app.post("/api/auth/reset-password", async (req, res) => {
  const token = (req.body?.token || "").trim();
  const password = req.body?.password || "";

  if (!token || token.length !== 20 || password.length < 6) {
    return res.status(400).json({ error: "Invalid token or password" });
  }

  const user = await db.users.findOne({
    resetToken: token,
    resetTokenExpires: { $gt: new Date() },
  });

  if (!user) {
    return res.status(400).json({ error: "Invalid or expired token" });
  }

  const hash = await hashPassword(password); // use your existing hasher
  await db.users.updateOne(
    { _id: user._id },
    {
      $set: { password: hash },
      $unset: { resetToken: "", resetTokenExpires: "" }, // one-time use
    }
  );

  res.json({ ok: true });
});
```

Each time someone clicks **Forgot password?** they get a **new** 20-character token; the old one stops working.


---

## Backup codes

### Format
- **20 characters**, alphabet `A-Z` (no I/O) + `2-9`
- Display formatted as `XXXX-XXXX-XXXX-XXXX-XXXX`
- **New code** whenever:
  - User clicks “Generate new backup code” in Chat → Settings
  - User successfully resets password
  - User changes password in settings
- Old code is **invalidated** when a new one is created

### POST /api/auth/backup-code
Body: `{ "code": "XXXX-XXXX-..." }` (auth required)  
Or after reset: `{ "code": "...", "token": "resetToken" }`

- Hash and store the code on the user
- Replace any previous backup code
- Return `{ "ok": true }`

### POST /api/auth/login-backup
Body: `{ "code": "XXXX-XXXX-..." }`

- Find user by backup code (compare hash)
- Return same shape as login: `{ user, token }`
- Does **not** require username or password

### Chat settings UI (client)
- **Settings** button next to Sign out
- Shows username, masked password, current backup code
- Generate new code / change password
- Theme-aware (uses CSS variables from the active Arctic theme)


---

## Reset password → auto login

`POST /api/auth/reset-password`  
Body: `{ "token", "password" }`

**Success response should include a session token so the client can auto-login:**

```json
{
  "ok": true,
  "token": "session_jwt_here",
  "user": { "username": "sealiee67", "email": "you@example.com" }
}
```

The client:
1. Saves `token` → logged in immediately  
2. Shows a **new backup code** on the success screen  
3. Redirects to `app.html` after a few seconds  

If you can't return a session token, at least return `{ ok: true, user: { username } }` so the client can call `/api/auth/login` with the new password.

---

## Claim account (no email on account yet)

`POST /api/auth/claim-account`  
Body: `{ "username", "email" }`

**Only allowed if the account has no email attached.**

1. Verify username exists and `email` is empty/null  
2. Store pending email + confirmation token  
3. Email a link (e.g. `reset.html?token=CLAIM_TOKEN` or a confirm page)  
4. After user confirms via link, they can set a password and receive a session — **without knowing the old password**  
5. If account already has an email → reject with `{ "error": "Account already has an email" }`

Fallback: `POST /api/auth/add-email` `{ username, email }` for attaching email when policy allows.

**Security:** Only enable claim for accounts that never had an email. Once an email is set, password reset must go through that email.
