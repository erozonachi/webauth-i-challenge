const knex = require('knex');
const configOption = require('../knexfile').development;

module.exports = knex(configOption);
