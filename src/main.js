const express = require('express');

const app = express();

// Setup middlewares
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({});
});

module.exports = app;
