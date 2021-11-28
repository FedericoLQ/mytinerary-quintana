const express = require("express");
const cors = require("cors")
const app = express();
const router = require('./routes/routes')
// require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(4000, () => {
  console.log(" HELLO!! Server is listening on port 4000");
});
