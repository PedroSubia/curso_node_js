// 07_manejar_paginas_no_existente js
// para correr este ejemplo en la carpeta public renombrar index.html como index01.html
// ya que para que tome el index.pug y no debe haber un index.html, si no lo tomara a este y no al index.pug
var express = require("express")
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

var perros_array = [
    {raza: "Doberman", texto: "Perro de ataque", imagen:"doberman.jpg"},
    {raza: "Dachshund", texto: "Perro de caza", imagen:"dachshund.jpg"},
    {raza: "Pastor Aleman", texto: "Perro de pastoreo", imagen:"pastorAleman.jpg"},
    {raza: "Pug", texto: "Perro de compañia", imagen:"pug.jpg"},
    {raza: "San Bernando", texto: "Perro de rescate", imagen:"sanBernando.jpg"}
]

app.get("/", (req, res) => {
    //res.send("index.html"); //al agregar pug, esta linea es reemplazada
    res.render("index.pug", {
        titulo: "NODEJS",
        texto: "Selecciona un perro",
        imagen: "perros.jpg",
        perros: perros_array
    });
});

app.get("/perro/:raza", (req, res) => {
    var datosPerro = perros_array.filter( (perro) => {
        if (req.params.raza ==perro.raza){
            return perro;
        }
    })[0];
    res.render("perro.pug", {
        raza: req.params.raza,
        data: datosPerro
    });
});

// manejando paginas no encontradas
app.use( (req, res) => {
    res.status(400);
    let error = req.originalUrl;
    res.render("404.pug", {texto:error});
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
