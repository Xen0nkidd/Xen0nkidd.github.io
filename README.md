# Velara Browser (Railway)

Minimal Velara proxy browser + Wisp server.

## Deploy on Railway

1. Push this folder to a GitHub repo.
2. railway.app → New Project → Deploy from GitHub repo.
3. Settings → Networking → Generate Domain.
4. Open the Railway HTTPS URL (not github.io).

## Local test

```bash
npm install
npm start
# open http://localhost:3000
```

## Paths

- UI: `/`
- Service worker: `/sw.js`
- Wisp WebSocket: `/education/channel/`
- Scramjet runtime: `/education/runtime/`
