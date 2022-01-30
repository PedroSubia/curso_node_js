// para correr este ejemplo en la carpeta public renombrar index01.html como index.html
// ya que al instalar el paquete pug; se renombro al index para que tome el index.pug y no el index.html
var express = require("express")
var app = express();

app.get("/", (req, res) => {
    res.send("Hola desde express");
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");;
});
