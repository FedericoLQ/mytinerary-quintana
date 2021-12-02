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
    const { name, src, price, duration, likes, hashtag, city } = req.body;
    new Itinerary({ name, src, price, duration, likes, hashtag, city })
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
    console.log(itinerary);

    try {
      updateI = await Itinerary.findOneAndUpdate({ _id: id }, city, {
        new: true,
      });
      console.log(updateI);
    } catch (error) {
      console.error(error);
    }
    res.json({ response: updateI ? true : false });
  },
};

module.exports = itineraryController;