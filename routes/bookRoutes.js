const express = require("express");
const router = express.Router();
const userController = require("../controllers/bookController");

app.post("/api/books", bookController.createBook);
app.get("/api/books", bookController.getBooks);
app.get("/api/books/:id", bookController.getBookById);
