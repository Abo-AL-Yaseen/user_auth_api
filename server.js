// Simple User Auth API - server entry
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

dotenv.config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user_auth_db';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => res.send({ ok: true, message: 'User Auth API running' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
