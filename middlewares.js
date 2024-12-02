const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Route: " + req.url + "Metodo: " + req.method);
  next();
});
app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/about", (req, res) => {
  res.send("profile page");
});

app.use((req, res, next) => {
  if (req.query.login === "richard@gmail.com") {
    next();
  } else {
    res.send("No autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.listen(3000);
console.log("Server listening on " + 3000);
