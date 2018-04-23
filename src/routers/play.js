const express = require('express');

const routes = express.Router();

const auth = require('../middlewares/auth-check');

const playPayload = require('../helpers/play-payload');

const playController = require('../controllers/play-controller');

routes.post('/', auth.check, playPayload.verify, playController.init);

module.exports = routes;
