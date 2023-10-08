const express = require("express");
const app = express();

app.get("/random/glowhosttest", (req, res) => {
  res.send("Hey");
}).listen();