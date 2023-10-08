const express = require("express");
const app = express();

const db = require("./db.service");

app.get("/random/glowhosttest", (req, res) => {
  db.connect();
  res.send("Hey");
}).listen();