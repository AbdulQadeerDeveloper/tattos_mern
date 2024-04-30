const express = require('express');
const router = express.Router();
const checkoutController = require('../../controllers/tattoosController/checkoutController');
router.post('/api/basic/create-checkout-session', checkoutController.addbasicPayment);
router.get('/api/business/create-checkout-session', checkoutController.addbusinessPayment);
router.post('/api/premium/create-checkout-session', checkoutController.addpremiumPayment);
module.exports = router;
