// src/controllers/PingController.js

const PingService = require('../services/PingService');

class PingController {
    constructor() {
        this.pingService = new PingService();
    }

    ping(req, res) {
        const result = this.pingService.getPing();
        res.json(result);
    }
}

module.exports = PingController;
