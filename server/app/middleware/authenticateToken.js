// middleware/authenticateToken.js
const jwt = require('jsonwebtoken');
// Add JWT authentication system for secure user login and session management
const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Assumes "Bearer TOKEN"
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Authentication failed' });
  }
};

module.exports = authenticateToken;
