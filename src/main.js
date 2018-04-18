const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Custom routes
const homeRountes = require('./routes/home');

// Custom middleware
const headers = require('./middlewares/headers-config');
const notFound = require('./middlewares/not-found');

// Setup middlewares
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(headers.available);

app.get('/', homeRountes);

// 404 Handler
app.use(notFound.notFound);

module.exports = app;
