const knex = require('knex')

const knexfile = require('../knexfile')

// change to "production" and update knexfile.js to use postgres.
const database = process.env.NODE_ENV

module.exports = knex(knexfile[database])
