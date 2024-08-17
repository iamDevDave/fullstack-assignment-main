// src/routes/CardRoutes.js

const express = require('express');
const cardController = require('../controllers/CardController');

const router = express.Router();

router.post('/cards', (req, res, next) => cardController.createCard(req, res, next));
router.get('/cards', (req, res, next) => cardController.getAllCards(req, res, next));
router.get('/cards/:title', (req, res, next) => cardController.getCardByTitle(req, res, next));

module.exports = router;
