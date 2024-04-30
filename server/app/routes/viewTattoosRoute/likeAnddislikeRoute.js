const express = require('express');
const router = express.Router();
const likeController = require('../../controllers/tattoosController/likeController');

router.post('/api/tattoos/:id/like', likeController.addLike);
router.post('/api/tattoos/:id/dislike', likeController.addDislike);

module.exports = router;
