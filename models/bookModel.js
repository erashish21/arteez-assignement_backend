const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
