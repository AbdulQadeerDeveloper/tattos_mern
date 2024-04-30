const express = require('express');
const router = express.Router();
const businessController = require('../../controllers/tattoosController/businessController');

router.post('/api/customer/details', businessController.addBusinessPlain);
router.get('/api/customer/details/:id', businessController.getByIdBusinessPlain);
router.get('/api/customer/details', businessController.getAllBusinessPlain);
router.delete('/api/customer/details/:id', businessController.deleteBusinessPlain);
module.exports = router;
