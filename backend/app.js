// src/app.js

require('dotenv').config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/CardRoutes');
const pingRoutes = require('./routes/PingRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', pingRoutes);
app.use('/api', cardRoutes);

app.use(errorHandler);

module.exports = app;
