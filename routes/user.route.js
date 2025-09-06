const express = require("express");
const { createUser, getUser,updateUser, deleteUser, login } = require("../controller/user.controller");
const router = express.Router();

//REST API Endpoints for User Management

//post -> add data to the database
router.post("/create-user", createUser);
router.post("/login-user",login)

// Export the router to be used in the main app
router.get("/get-user",getUser);
router.put("/put-user/:id",updateUser);
router.delete("/delete-user/:id",deleteUser);


module.exports = router; // This allows the router to be imported in other files, such as index.js




