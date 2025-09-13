const express = require("express");
const { createUser, getUser,updateUser, deleteUser, login, logout } = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.midlleware");
const upload = require("../middleware/upload.middleware");
const router = express.Router();

//REST API Endpoints for User Management

//post -> add data to the database
router.post("/create-user",upload.single("image") ,createUser);
router.post("/login-user",login)

// Export the router to be used in the main app
router.get("/get-user",getUser);
router.put("/put-user/:id" , authMiddleware,updateUser);
router.post("/logout-user" , authMiddleware,logout);
router.delete("/delete-user/:id",deleteUser);


module.exports = router; // This allows the router to be imported in other files, such as index.js




