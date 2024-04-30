// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();
const connectDB = require('./app/config/db.config');// DB Config
const bodyParser = require('body-parser');
const path = require("path");

connectDB();
// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const authenticateToken = require('./app/middleware/authenticateToken');




// Routes
app.use('/uploads', express.static('uploads'));
require('./app/config/googleAuth.config')(passport);// Passport Config


app.use(require('./app/routes/authRoute/registerRoute'));
app.use(require('./app/routes/authRoute/loginRoute'));
app.use(require('./app/routes/authRoute/googleRoute'));
app.use(require('./app/routes/authRoute/facebookRoute'));
app.use(require('./app/routes/authRoute/forgotPasswordRoute'));
app.use(require('./app/routes/authRoute/resetPasswordRoute'));
app.use(require('./app/routes/authRoute/updateUserRoute'));
app.use(require('./app/routes/authRoute/messageRoute'));
app.use(require('./app/routes/viewTattoosRoute/placementRoute'));
app.use(require('./app/routes/viewTattoosRoute/categoriesRoute'));
app.use(require('./app/routes/viewTattoosRoute/tattooRoute'));
app.use(require('./app/routes/viewTattoosRoute/commentRoute'));
app.use(require('./app/routes/viewTattoosRoute/likeAnddislikeRoute'));
app.use(require('./app/routes/viewTattoosRoute/businessRoute'));
app.use(require('./app/routes/viewTattoosRoute/checkoutPaymentRoute'));


app.get('/protected-route', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});





// depolyment process
// // Conditionally serve static files in production
// if (process.env.NODE_ENV === "production") {
//   // Serve any static files from the ./client/build directory
//   app.use(express.static(path.join(__dirname, './client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});












