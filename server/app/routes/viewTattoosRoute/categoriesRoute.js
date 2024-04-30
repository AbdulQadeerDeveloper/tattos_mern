const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/tattoosController/categoriesController');

router.post('/api/categories', categoriesController.addCategories);
router.get('/api/categories', categoriesController.getCategories);
router.get('/api/categories/:id', categoriesController.getIdCategories);
router.put('/api/categories/:id', categoriesController.updateCategories);
router.delete('/api/categories/:id', categoriesController.deleteCategories);
module.exports = router;
