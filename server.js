const cities = [
    { name: "Abu Dhabi", src: "./assets/AbuDhabi.jpg"},
    { name: "Baku", src: "./assets/Baku.jpg"},
    { name: "Bariloche", src: "./assets/Bariloche.jpg"},
    { name: "Dublin", src: "./assets/Dublin.jpg"},
    { name: "Kirkjufell", src: "./assets/Kirkjufell.jpg"},
    { name: "Mallorca", src: "./assets/Mallorca.jpg"},
    { name: "Montreal", src: "./assets/Montreal.jpg"},
    { name: "Nürburg", src: "./assets/Nürburg.png"},
    { name: "Portimao", src: "./assets/Portimao.jpg"},
    { name: "Sochi", src: "./assets/Sochi.png"},
    { name: "Tokyo", src: "./assets/Tokyo.jpg"},
    { name: "Yidda", src: "./assets/Yidda.jpg"},
]

const express = require("express");

const cors = require("cors")


const app = express();

app.use(cors())

app.get("/pruebas/datos",(req,res)=>{
    console.log("Me llego un pedido Get");
    res.json({Respuesta:"¡Exitos!"})
})

app.get("/api/cities",(req,res)=>{
    res.json({response:{cities}})

})

app.listen(4000, () => {
  console.log(" HELLO!! Server is listening on port 4000");
});
