const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Custom middleware
const headers = require('./middlewares/headers-config');

// Setup middlewares
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(headers.available);

app.get('/', (req, res) => {
    res.json({});
});

module.exports = app;
