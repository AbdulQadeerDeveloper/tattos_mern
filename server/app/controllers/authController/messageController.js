// controllers/authController/messageController.js
const asyncHandler = require('express-async-handler');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Message = require('../../models/authModels/message');


// createMessage create users
exports.createMessage = asyncHandler(async (req, res) => {
    let { name, email, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("Please fill all filed.");
    }

    let userExists = await Message.findOne({ email });

    console.log(userExists)

    if (userExists) {
        return res.status(400).send("User already exists with the given email.");
    }

    let newUser = new Message({  name, email, message });
  
    console.log(newUser)


    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        message: newUser.message,
       
    });
});

// getAlllMessage  get all users
exports.getAlllMessage = asyncHandler(async (req, res) => {
  try {
    const users = await Message.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// MessageDelete  delete user
exports.MessageDelete = asyncHandler(async (req, res) => {
  try {
    const user = await Message.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});



