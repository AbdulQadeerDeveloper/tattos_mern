const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: "./config.env" });

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: function () { return !this.googleId }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    message: {
        type: String,
        trim: true,
        required:true
    },
   
  
});


// Create the model
const Message = mongoose.model('message', userSchema);

module.exports = Message;
