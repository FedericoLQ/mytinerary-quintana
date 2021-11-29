const express = require('express')

const router = express.Router()
const citiesController = require('../controllers/citiesController')


// const cities = [
//     { name: "AbuDhabi", src: "./assets/AbuDhabi.jpg"},
//     { name: "Baku", src: "./assets/Baku.jpg",},
//     { name: "Bariloche", src: "./assets/Bariloche.jpg"},
//     { name: "Dublin", src: "./assets/Dublin.jpg"},
//     { name: "Kirkjufell", src: "./assets/Kirkjufell.jpg"},
//     { name: "Mallorca", src: "./assets/Mallorca.jpg"},
//     { name: "Montreal", src: "./assets/Montreal.jpg"},
//     { name: "Nürburg", src: "./assets/Nürburg.png"},
//     { name: "Portimao", src: "./assets/Portimao.jpg"},
//     { name: "Sochi", src: "./assets/Sochi.png"},
//     { name: "Tokyo", src: "./assets/Tokyo.jpg"},
//     { name: "Yidda", src: "./assets/Yidda.jpg"},
// ]


router
.route('/cities')
.get(citiesController.getAllCities)
.post(citiesController.loadCity)
// .put(citiesController.updateCity)



router.route('/cities/:id')
.get(citiesController.city)
.delete(citiesController.deleteCity)
.put(citiesController.updateCity)

module.exports = router