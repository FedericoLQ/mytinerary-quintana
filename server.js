require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const passport = require("passport");
require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());


app.use("/api", router);
app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0' ,()=> console.log("Server is listening on port"));
