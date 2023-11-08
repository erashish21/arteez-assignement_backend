const Book = require("../models/bookModel");
const User = require("../models/userModel");

// Controller for book return
const returnBook = async (req, res) => {
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

    // Update the book's quantity
    book.quantity += 1;
    await book.save();

    // Remove the returned book from the user's account (you may need to implement this logic)
    // Update the user's account or any necessary records

    res.status(200).json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { returnBook };
