const express = require('express');

const routes = express.Router();

const usersController = require('../controllers/users-controller');

const loginPayload = require('../helpers/login-payload');
const signUpPayload = require('../helpers/signup-payload');

routes.post('/login', loginPayload.verify, usersController.login);

routes.post('/signup', signUpPayload.verify, usersController.signup);

module.exports = routes;
