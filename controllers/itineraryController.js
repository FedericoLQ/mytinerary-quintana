const Itinerary = require("../models/itinerary");


const itineraryController = {
  getAllItinerary: async (req, res) => {
    let itineraries;
    let error = null;
    try {
      itineraries = await Itinerary.find().populate('city');
    } catch (error) {
      error = error;
      console.error(error);
    }

    res.json({
      response: error ? "ERROR" : itineraries,
      success: error ? false : true,
      error: error,
    });
  },

  Itinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOne({ _id: id }).populate('city');
    } catch (error) {
      console.error(error);
    }
    res.json({ response: itinerary, success: true });
  },

  loadItinerary: (req, res) => {
    const { userName, imgUser, imgCity, price, duration, likes, hashtag, comments, city } = req.body;
    new Itinerary({ userName, imgUser, description, imgCity, price, duration, likes, hashtag, comments, city })
      .save()
      .then((response) => res.json({ response }));
  },

  deleteItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOneAndDelete({ _id: id });
    } catch (error) {
      console.error(error);
    }
    res.json({ response: itinerary, success: true });
  },

  updateItinerary: async (req, res) => {
    let id = req.params.id;
    let itinerary = req.body;
    let updateI;
    

    try {
      updateI = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, {
        new: true,
      });
      
    } catch (error) {
      console.error(error);
    }
    res.json({ response: updateI ? true : false });
  },

  itineraryByCity: async (req, res) => {
    let itineraries;
    const id = req.params.id;
    try {
      itineraries = await Itinerary.find({ city: id }).populate('city');
    } catch (error) {
      console.error(error);
    }
    res.json({ response: itineraries, success: true });
  },
};

module.exports = itineraryController;