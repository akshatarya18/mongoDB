// const User = require("../models/user.model");

// const createUser = async (req, res) => {
//   try {
//     const { age, name, email } = req.body;

//     //create new user by using those above data
//     const newUser = await User.create({ age, name, email }); //data created

//     res.status(200).json({ message: "User created successfully", newUser });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = {
//   createUser,
// };


const User = require("../models/user.model"); // Corrected path and filename

const createUser = async (req, res) => {
  try {
    const { age, name, email } = req.body; // Use 'username' to match schema

    // Create new user using the correct fields
    const newUser = await User.create({ age, name, email });

    res.status(201).json({ message: "User created successfully", user: newUser }); // Use 201 for creation
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser };