const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    userName:{type:String, required:true}, 
    imgUser: {type:String},
    description: {type:String},
    imgCity: {type:String},
    price: {type:Number},
    duration: {type:Number},
    likes: {type:Number},
    hashtag: {type:Array},
    comments: {type:String},
    city: {type:mongoose.Types.ObjectId, ref:'city'},
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary