// para correr este ejemplo en la carpeta public renombrar index.html como index01.html
// renombrar index01.pug como index.pug
// ya que para que tome el index.pug y no debe haber un index.html, si no lo tomara a este y no al index.pug
var express = require("express")
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    //res.send("index.html"); //al agregar pug, esta linea es reemplazada
    res.render("index.pug")
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");;
});
