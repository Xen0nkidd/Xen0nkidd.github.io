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
app.get("/", (_req, res) => {
  res.type("html").send("<!doctype html><p>Xenon proxy engine. Use the site Browser tab.</p>");
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
server.listen(PORT, "0.0.0.0", () => console.log("ok", PORT));
