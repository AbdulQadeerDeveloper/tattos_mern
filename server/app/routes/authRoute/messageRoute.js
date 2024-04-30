const express = require('express');
const router = express.Router();
const messageController = require('../../controllers/authController/messageController');

router.post('/api/message', messageController.createMessage);
router.get('/api/message', messageController.getAlllMessage);
router.delete('/api/message/:id', messageController.MessageDelete);

module.exports = router;
