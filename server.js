require('dotenv').config()
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes')
const passport = require("passport")
require('./config/database')
const app = express()

require("./config/database");
const path = require("path");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// middlewares
app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use('/api', Router)

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`El server esta en el puerto ${port}`);
  });