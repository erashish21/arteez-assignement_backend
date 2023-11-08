const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to register a new user
router.post("/register", userController.registerUser);

// Route to log in an existing user
router.post("/login", userController.loginUser);

module.exports = router;
