const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const {
  createBook,
  getBooks,
  getBookById,
  borrowBook,
} = require("./controllers/bookController");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
MONGODB_URI;
app.use(bodyParser.json());

app.post("/api/books", createBook);
app.get("/api/books", getBooks);
app.get("/api/books/:id", getBookById);
//app.use("/api/users", userRoutes);
app.post("/api/borrow/:bookId/:userId", borrowBook);
app.post("/api/return/:bookId/:userId", returnBook);
app.get("/api/users/:userId/books", getUserBooks);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
