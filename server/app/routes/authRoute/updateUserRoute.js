const express = require('express');
const router = express.Router();
const updateController = require('../../controllers/authController/updateController');

router.post('/api/updateUser', updateController.updateUser);

module.exports = router;
