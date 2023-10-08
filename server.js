const express = require("express");
const app = express();

app.get("/random/glowhosttest", (req, res) => {
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  res.send("Hey");
}).listen();