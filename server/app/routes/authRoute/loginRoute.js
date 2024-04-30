const express = require('express');
const router = express.Router();
// Develop CRUD operations for user management via new API endpoints
const loginController = require('../../controllers/authController/loginController');

router.post('/api/login', loginController.login);
router.get('/api/users', loginController.getAllloginUsers);
router.delete('/api/users/:id', loginController.loginDelete);

module.exports = router;
