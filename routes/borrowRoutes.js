
const express = require("express");
const router = express.Router();
const userController = require("../controllers/borrowController");

app.post("/api/borrow/:bookId/:userId", borrowController.borrowBook);
app.post("/api/return/:bookId/:userId", borrowController.returnBook);
app.get("/api/users/:userId/books", borrowController.getUserBooks);
