const express = require('express');
const router = express.Router();
const tattooController = require('../../controllers/tattoosController/tattooController');

router.post('/api/create/tattoos', tattooController.addTattooItems);
router.get('/api/all/tattoos', tattooController.getTattoo);
router.get('/api/all/tattoos/:id', tattooController.getIdByTattoos);
router.put('/api/update/tattoos/:id', tattooController.updateTattoo);
router.delete('/api/tattoos/:id', tattooController.deleteTattoo);
router.put('/api/tattoos/:id/status', tattooController.updateStatusTattoo);
router.get('/api/tattoos/status/approved', tattooController.updateStatusApprovedTattoo);
router.get('/api/tattoos/status/rejected', tattooController.getStatusRejectTattoo);
router.get('/api/tattoos/status/pending', tattooController.getStatusPendingTattoo);
router.get('/api/search-tattoos/:key', tattooController.searchTattoos);
router.get('/api/api/pagnination-tattoos', tattooController.pagination);
router.get('/api/tattoos', tattooController.sortByTatoos);
module.exports = router;
