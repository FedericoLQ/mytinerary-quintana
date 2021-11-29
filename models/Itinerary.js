const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true}, 
    src: {type:String},
    price: {type:Number},
    duration: {type:Number},
    likes: {type:Number},
    hashtag: {type:Array},
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary