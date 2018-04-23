const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Database setup
mongoose.connect(process.env.DB_CONNECTION_STRING);

// Custom routes
const homeRountes = require('./routes/home');
const userRoutes = require('./routes/users');
const deviceRountes = require('./routes/devices');
const playRountes = require('./routes/play');

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

// API routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/devices', deviceRountes);
app.use('/api/v1/play', playRountes);

// 404 Handler
app.use(notFound.notFound);

module.exports = app;
