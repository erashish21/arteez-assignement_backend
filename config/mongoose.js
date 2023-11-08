const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URI } = process.env; // Load MongoDB URI from .env file

// Connect to the MongoDB database
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Export the Mongoose connection for use in other parts of your application
module.exports = mongoose;
