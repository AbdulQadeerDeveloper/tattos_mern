const express = require('express');
const router = express.Router();
const placementController = require('../../controllers/tattoosController/placementController');

router.post('/api/placements', placementController.addPlacement);
router.get('/api/placements', placementController.getPlacement);
router.get('/api/placements/:id', placementController.getIdPlacement);
router.put('/api/placements/:id', placementController.updatePlacement);
router.delete('/api/placements/:id', placementController.deletePlacement);
module.exports = router;
