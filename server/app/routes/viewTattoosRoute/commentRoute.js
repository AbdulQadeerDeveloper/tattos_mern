const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/tattoosController/commentController');
router.post('/api/submitComment/:id', commentController.addComment);
router.get('/api/tattoos/:tattooId/comments', commentController.getComment);
router.put('/api/comments/:id', commentController.updateComment);
router.delete('/api/comments/:id', commentController.deleteComment);
module.exports = router;
