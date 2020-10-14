const express = require('express')
const db = require('../data/dbConfig.js')
const routes = require('../routes')

const server = express()

server.use(express.json())

server.use(routes)

module.exports = server
