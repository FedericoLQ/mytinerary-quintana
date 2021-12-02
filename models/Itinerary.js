const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true}, 
    src: {type:String},
    price: {type:Number},
    duration: {type:Number},
    likes: {type:Number},
    hashtag: {type:Array},
    comments: {type:String},
    city: {type:mongoose.Types.ObjectId, ref:'city'},
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary