import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.static(publicDir, {
  setHeaders(res, filePath) {
    if (filePath.endsWith(".wasm")) res.setHeader("Content-Type", "application/wasm");
  },
}));

app.get(/^\/education\/lesson(\/.*)?$/, (req, res) => {
  res.redirect(302, "/xbrowser.html");
});
app.get("/browse", (req, res) => {
  const to = req.query.to ? `?to=${encodeURIComponent(String(req.query.to))}` : "";
  res.redirect(302, "/xbrowser.html" + to);
});

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
server.listen(PORT, "0.0.0.0", () => console.log("listening", PORT));
