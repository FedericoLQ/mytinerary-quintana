const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema ({
    activity: {type: String, required: true},
    src: {type: String, required: true},
    itineraryId: {type: mongoose.Types.ObjectId, ref: "itinerary"},
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity