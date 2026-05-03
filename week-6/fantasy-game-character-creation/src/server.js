"use strict";

const http = require("http");
const url = require("url");

let character = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "POST" && pathname === "/create") {
    const { class: charClass, gender, fact } = parsedUrl.query;

    character = {
      class: charClass,
      gender,
      fact
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Character created", character }));
  }

  else if (req.method === "POST" && pathname === "/confirm") {
    if (!character) {
      res.writeHead(400);
      return res.end("No character to confirm");
    }

    res.writeHead(200);
    res.end("Character confirmed!");
  }

  else if (req.method === "GET" && pathname === "/character") {
    if (!character) {
      res.writeHead(404);
      return res.end("Character not found");
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  }

  else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = server;