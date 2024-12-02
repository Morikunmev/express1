const express = require("express");
const app = express();


app.all('/info',(req,res)=>{
    res.send("Info sobre la ruta /info");
})
app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("Lista de libros de js");
  } else {
    res.send("Pagina normal");
  }
});

app.get("/hello/:username", (req, res) => {
  console.log(req.params.username);
  res.send("hello " + req.params.username);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send("Result " + (parseInt(x) + parseInt(y))); // Agregué paréntesis para la suma
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "fazt") {
    return res.sendFile(
      "./https___dev-to-uploads.s3.amazonaws.com_uploads_articles_p5rymbqwk2616sdxkcv9.png",
      {
        root: __dirname,
      }
    );
  }
  res.send("El usuario no tiene acceso");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  console.log(req.params);
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log("Server listening on " + 3000);
