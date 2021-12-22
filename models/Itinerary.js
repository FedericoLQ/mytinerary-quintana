const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  userName: { type: String, required: true },
  imgUser: { type: String },
  description: { type: String },
  imgCity: { type: String },
  price: { type: Number },
  duration: { type: Number },
  likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  hashtag: { type: Array },
  comments: [{ user: { type: mongoose.Types.ObjectId, ref: 'user' },imgUrl:{type:String, required:true} ,text: { type: String, required: true } }],

  city: { type: mongoose.Types.ObjectId, ref: "city" },
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
