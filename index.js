const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const bookController = require("./controllers/bookController");
const userController = require("./controllers/userController");
const borrowController = require("./controllers/borrowController");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
MONGODB_URI;
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
