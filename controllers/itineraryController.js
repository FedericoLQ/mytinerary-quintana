const Itinerary = require("../models/itinerary");

const itineraryController = {
  getAllItinerary: async (req, res) => {
    let itineraries;
    let error = null;
    try {
      itineraries = await Itinerary.find().populate("city");
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
      itinerary = await Itinerary.findOne({ _id: id }).populate("city");
    } catch (error) {
      console.error(error);
    }
    res.json({ response: itinerary, success: true });
  },

  loadItinerary: (req, res) => {
    const {
      userName,
      imgUser,
      imgCity,
      price,
      duration,
      likes,
      hashtag,
      comments,
      city,
    } = req.body;
    new Itinerary({
      userName,
      imgUser,
      description,
      imgCity,
      price,
      duration,
      likes,
      hashtag,
      comments,
      city,
    })
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
      itineraries = await Itinerary.find({ city: id }).populate("city");
    } catch (error) {
      console.error(error);
    }
    res.json({ response: itineraries, success: true });
  },
  cLike: async (req, res) => {
    try {
      const id = req.params.id;
      const itinerary = await Itinerary.findOne({ _id: id });
      if (itinerary.likes.includes(req.user._id)) {
        const unlikeIndex = itinerary.likes.indexOf(req.user._id); // encontrar indice del user que ya dio like
        itinerary.likes.splice(unlikeIndex, 1);
        await itinerary.save();

        res.json({ response: itinerary.likes, idUser: req.user._id });
      } else {
        itinerary.likes.unshift(req.user._id);
        await itinerary.save();
        res.json({ response: itinerary.likes, idUser: req.user._id });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
  createComment: async (req, res) => {
    let id = req.params.id;

    try {
      const itinerary = await Itinerary.findOne({ _id: id });
      const objComment = {
        user: req.user._id,
        text: req.body.text,
        imgUrl: req.user.imgUrl,
        userI: req.user.userName
      };
      itinerary.comments.unshift(objComment);
      await itinerary.save();

      res.json({ comments: itinerary.comments });
    } catch (error) {
      console.error(error);
    }
  },
  updateComment: async (req, res) => {
    let id = req.params.id;
    const commentId = req.params.commentID;
    const bodyX = req.body;

    try {
      const itinerary = await Itinerary.findOne({ _id: id });
      const comment = itinerary.comments.find(
        (comment) => comment._id.toString() === commentId
      );
      console.log(comment, bodyX);
      comment.text = bodyX.text;

      await itinerary.save();

      res.json({ comments: itinerary.comments });
    } catch (error) {
      console.error(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const itinerary = await Itinerary.findOne({ _id: req.params.id });
      const comment = itinerary.comments.find(
        (comment) => comment._id.toString() === req.params.commentID
      );
      if (!comment)
        return res.json({ success: false, error: "Comment does not exist" });

      if (comment.user.toString() !== req.user._id.toString())
        return res.json({ success: false, error: "User not authorized" });

      const removedCommentIndex = itinerary.comments.findIndex(
        (comment) => comment._id.toString() === req.params.commentID.toString()
      );

      itinerary.comments.splice(removedCommentIndex, 1);
      await itinerary.save();

      res.json({ succes: true, comments: itinerary.comments });
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
  getCommentsByItinerary: async (req, res) => {
    try {
      const id = req.params.id;
      const itinerary = await Itinerary.findOne({ _id: id });

      res.json({ comments: itinerary.comments });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};
module.exports = itineraryController;
