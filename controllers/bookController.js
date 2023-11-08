const Book = require("../models/bookModel");

// Controller for handling the POST /api/books endpoint
const createBook = async (req, res) => {
  try {
    const { title, author, ISBN, quantity } = req.body;

    const newBook = new Book({
      title,
      author,
      ISBN,
      quantity,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBooks = async (req, res) => {
  try {
    // Query the database to find all books with a positive quantity
    const books = await Book.find({ quantity: { $gt: 0 } });

    if (!books) {
      return res.status(404).json({ message: "No available books found." });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller for retrieving a specific book by its ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createBook, getBooks, getBookById };
