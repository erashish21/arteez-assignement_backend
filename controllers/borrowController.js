const Book = require("../models/bookModel");
const User = require("../models/userModel");

// Controller for book borrowing
const borrowBook = async (req, res) => {
  const { bookId, userId } = req.params;

  try {
    // Find the book by its ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the book is available
    if (book.quantity > 0) {
      // Update the book's quantity
      book.quantity -= 1;
      await book.save();

      // Add the borrowed book to the user's account (you may need to implement this logic)
      // Update the user's account or any necessary records

      res.status(200).json({ message: "Book borrowed successfully" });
    } else {
      res.status(400).json({ error: "Book is not available for borrowing" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { borrowBook };
