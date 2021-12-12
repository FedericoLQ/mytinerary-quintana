const express = require('express')

const validator = require("../config/validator")

const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itineraryController = require('../controllers/itineraryController')

const userController = require('../controllers/userController')

router
.route('/cities')
.get(citiesController.getAllCities)
.post(citiesController.loadCity)

router.route('/cities/:id')
.get(citiesController.city)
.delete(citiesController.deleteCity)
.put(citiesController.updateCity)


//Itinerary Routes
router
.route('/itineraries')
.get(itineraryController.getAllItinerary)
.post(itineraryController.loadItinerary)



router.route('/itinerary/:id')
.get(itineraryController.Itinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.updateItinerary)

router.route('/itinerary/city/:id')
.get(itineraryController.itineraryByCity)

router.route('/user/signin')
    .post(userController.signin)
router.route('/user/signup')
    .post(validator, userController.addUser)

module.exports = router