const express = require('express');
const router = express.Router();
const templateController = require('../controllers/template.controller');

// Filtros
router.get('/category/:category', templateController.getTemplatesByCategory);
router.get('/tag/:tag', templateController.getTemplatesByTag);

// Buscar por ID
router.get('/:id', templateController.getTemplateById);

// Principal: lista e criação
router.get('/', templateController.getTemplates);
router.post('/', templateController.createTemplate);

// Seed
router.post('/seed', templateController.seedDatabase);

module.exports = router;
