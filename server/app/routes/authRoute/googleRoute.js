// googleAuthRoute.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth login route
router.get('/api/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/api/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/api/login'
}));

// Successful login route
router.get('/api/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "User logged in", user: req.user })
  } else {
    res.status(400).json({ message: "Not Authorized" })
  }
});

// Logout route
router.get('/api/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
