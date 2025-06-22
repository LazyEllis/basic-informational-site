import http from "http";
import { URL } from "url";
import fs from "fs/promises";

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost:3000/");
    const pathname = url.pathname === "/" ? "/index" : url.pathname;
    const filename = `./pages${pathname}.html`;

    try {
      const data = await fs.readFile(filename);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } catch {
      try {
        const data = await fs.readFile("./pages/404.html");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } catch {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal Server Error");
      }
    }
  })
  .listen(8080);
