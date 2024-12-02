// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res);
// });
// server.listen(3000);
// console.log("server on port "+ 3000)

const express = require("express");
const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(3000);
console.log("server on port " + 3000);
