
import http from "node:http";
import express from "express";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const PORT = Number(process.env.PORT) || 3000;
const app = express();
app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html><meta charset=utf-8>
<title>Xenon Wisp</title>
<body style="font:14px system-ui;background:#11081a;color:#eee;padding:24px">
<p>Wisp only — use Xenon Browser on github.io. Path: /education/channel/</p>
</body>`);
});
const server = http.createServer(app);
server.on("upgrade", (req, socket, head) => {
  let p = "/";
  try { p = new URL(req.url || "/", "http://localhost").pathname; } catch (_) {}
  if (p === "/education/channel/" || p === "/education/channel") {
    wisp.routeRequest(req, socket, head);
    return;
  }
  socket.destroy();
});
server.listen(PORT, "0.0.0.0", () => console.log("wisp", PORT));
