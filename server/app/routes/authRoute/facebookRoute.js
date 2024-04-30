// facebookAuthRoute.js

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Facebook Auth Routes
router.get('/api/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/api/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Success and error routes (if needed)
router.get('/api/auth/facebook/success', (req, res) => {
  res.send('Successfully logged in via Facebook.');
});

router.get('/api/auth/facebook/error', (req, res) => {
  res.send('Error logging in via Facebook.');
});

// Logout route
router.get('/api/logout', (req, res) => {
  req.logout(); // This clears the session
  res.redirect('/'); // Redirect to the homepage or login page
});

module.exports = router;
