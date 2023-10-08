const express = require("express");
const app = express();

const db = require("./db.service");

app.get("/random/glowhosttest", (req, res) => {
  db.query("SELECT * FROM users").then(value => {
    res.send(value);
  })
}).listen();