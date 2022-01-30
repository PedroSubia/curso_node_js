// para correr este ejemplo en la carpeta public renombrar index.html como index01.html
// ya que para que tome el index.pug y no debe haber un index.html, si no lo tomara a este y no al index.pug
// controlar que el archivo index.pug sea el que tiene los parametros recibidos (title #{titulo}) (figcaption #{texto})
var express = require("express")
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    //res.send("index.html"); //al agregar pug, esta linea es reemplazada
    res.render("index.pug", {
        titulo: "NODEJS",
        texto: "Parametro enviado desde archivo .js",
        imagen: "logoNodeJS.jpg"
    });
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
