// src/routes/PingRoutes.js

const express = require('express');
const PingController = require('../controllers/PingController');

const router = express.Router();
const pingController = new PingController();

router.get('/ping', (req, res) => pingController.ping(req, res));

module.exports = router;
