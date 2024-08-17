// src/controllers/CardController.js

const Card = require('../models/Card');

class CardController {
    async createCard(req, res, next) {
        try {
            const { title, description } = req.body;

            if (!title || !description) {
                const error = new Error('Title and description are required.');
                error.statusCode = 400;
                throw error;
            }

            const card = new Card({ title, description });
            await card.save();
            res.status(201).json(card);
        } catch (error) {
            // Check if the error is due to a duplicate key
            if (error.code === 11000) {
                error.statusCode = 400;
                error.message = `Card with the title "${req.body.title}" already exists.`;
            }
            next(error);
        }
    }


    async getAllCards(req, res, next) {
        try {
            const cards = await Card.find();
            res.status(200).json(cards);
        } catch (error) {
            next(error); // Correct usage of `next` to pass error to middleware
        }
    }

    async getCardByTitle(req, res, next) {
        try {
            const { title } = req.params;
            const card = await Card.findOne({ title });

            if (!card) {
                const error = new Error('Card not found.');
                error.statusCode = 404;
                throw error;
            }

            res.status(200).json(card);
        } catch (error) {
            next(error); // Correct usage of `next` to pass error to middleware
        }
    }
}

module.exports = new CardController();
