
import http from "node:http";
import express from "express";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const PORT = Number(process.env.PORT) || 3000;
const app = express();

// Health / not the Velara UI — Browser uses Wisp only
app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html><meta charset=utf-8>
<title>Xenon Network proxy</title>
<body style="font:14px system-ui;background:#11081a;color:#eee;padding:24px">
<h1>Xenon Network</h1>
<p>Wisp engine is running. Use the site Browser tab — this page is not the app UI.</p>
<p>Channel: <code>/education/channel/</code></p>
</body>`);
});

app.get("/health", (_req, res) => res.json({ ok: true, wisp: "/education/channel/" }));

const server = http.createServer(app);
server.on("upgrade", (req, socket, head) => {
  let pathname = "/";
  try { pathname = new URL(req.url || "/", "http://localhost").pathname; } catch (_) {}
  if (pathname === "/education/channel/" || pathname === "/education/channel") {
    wisp.routeRequest(req, socket, head);
    return;
  }
  socket.destroy();
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Xenon Wisp on", PORT, "path /education/channel/");
});
