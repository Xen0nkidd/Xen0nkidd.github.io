import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");
const PORT = Number(process.env.PORT) || 3000;

const app = express();

// Correct MIME for wasm (important for Scramjet)
app.use(
  express.static(publicDir, {
    setHeaders(res, filePath) {
      if (filePath.endsWith(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
      if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

const server = http.createServer(app);

// Velara client connects to: wss://HOST/education/channel/
server.on("upgrade", (req, socket, head) => {
  let pathname = "/";
  try {
    pathname = new URL(req.url || "/", "http://localhost").pathname;
  } catch (_) {}

  if (pathname === "/education/channel/" || pathname === "/education/channel") {
    wisp.routeRequest(req, socket, head);
    return;
  }

  socket.destroy();
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Velara browser listening on ${PORT}`);
  console.log(`Wisp path: /education/channel/`);
});
