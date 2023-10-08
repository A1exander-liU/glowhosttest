const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  res.end("Hey");
}).listen(PORT);