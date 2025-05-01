const express = require('express');
const app = express();
require('dotenv').config();

// Routes
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

// Démarrage
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));