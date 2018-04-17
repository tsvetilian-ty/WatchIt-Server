const express = require('express');

const app = express();

// Custom middleware
const headers = require('./middlewares/headers-config');
const notFound = require('./middlewares/not-found');

// Setup middlewares
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({hello: 'world'})
});

module.exports = app;
