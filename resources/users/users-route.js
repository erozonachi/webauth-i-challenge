const express = require('express');
const validator = require('../../helpers/validator');
const auths = require('../../helpers/auths');
const controller = require('./users-controller');

const app = express.Router();

app.post('/register', validator.validateUser, controller.create);
app.post('/login', controller.authenticate);
app.get('/users', auths.authorize, controller.read);

module.exports = app;
