
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userControllers = {
  addUser: async (req, res) => {
    let { email, password, userName, lastName, imgUrl, country, google } =
      req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.json({
          success: false,
          error: "The email is already in use",
          response: null,
        });
      } else {
        const hashPass = bcryptjs.hashSync(password, 10);

        const newUser = new User({
          email,
          password: hashPass,
          userName,
          lastName,
          imgUrl,
          country,
          google,
        });
        await newUser.save();
        const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
        res.json({ success: true, response: {  userName, imgUrl, token }, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  signin: async (req, res) => {
    const { email, password, google } = req.body;
  
    if(!email || !password) return res.json({
            success: false,
            error: "All fields have to be filled",
          }); 
    try {
      const userExists = await User.findOne({ email });
      if (!userExists) {
        res.json({ success: true, error: "Email and/or password incorrect" });
      } else {
        if (userExists.google && !google)
          return res.json({
            success: false,
            error: " Email and/or password incorrect",
          });
        let samePass = bcryptjs.compareSync(password, userExists.password);
        if (samePass) {
          const { userName, imgUrl } = userExists;
          const token = jwt.sign({ ...userExists }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: { userName, imgUrl, token },
            error: null,
          });
        } else {
          res.json({ success: true, error: "Email and/or password incorrect" });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
  authUser: (req, res) => {
    try {
      const userAuth = req.user;
      res.json({ success: true, response: userAuth, error: null });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userControllers;
