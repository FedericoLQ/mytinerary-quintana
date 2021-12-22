const express = require("express");
const passport = require("../config/passport");

const validator = require("../config/validator");

const router = express.Router();
const citiesController = require("../controllers/citiesController");
const itineraryController = require("../controllers/itineraryController");

const userController = require("../controllers/userController");

router
  .route("/cities")
  .get(citiesController.getAllCities)
  .post(citiesController.loadCity);

router
  .route("/cities/:id")
  .get(citiesController.city)
  .delete(citiesController.deleteCity)
  .put(citiesController.updateCity);

//Itinerary Routes
router
  .route("/itineraries")
  .get(itineraryController.getAllItinerary)
  .post(itineraryController.loadItinerary);

router
  .route("/itinerary/:id")
  .get(itineraryController.Itinerary)
  .delete(itineraryController.deleteItinerary)
  .put(itineraryController.updateItinerary);

router.route("/itinerary/city/:id").get(itineraryController.itineraryByCity);

router.route("/user/signin").post(userController.signin);
router.route("/user/signup").post(validator, userController.addUser);
router
  .route("/user/auth")
  .get(
    passport.authenticate("jwt", { session: false }),
    userController.authUser
  );

router.route("/likes/itinerary/:id")
.put(passport.authenticate("jwt", { session: false }), 
itineraryController.cLike
  
  )

router.route('/comments/itinerary/:id')
    .post(passport.authenticate('jwt', { session: false }), itineraryController.createComment)
    .get(itineraryController.getCommentsByItinerary)

router.route('/comments/:commentID/itinerary/:id')
    .delete(passport.authenticate('jwt', { session: false }), itineraryController.deleteComment)
    .put(passport.authenticate('jwt', { session: false }), itineraryController.updateComment)

module.exports = router;
