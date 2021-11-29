const express = require('express')

const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itineraryController = require('../controllers/itineraryController')
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

module.exports = router