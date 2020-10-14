const express = require('express')
const app = express()

// Resources
const welcome = require('../resources/welcome/welcomeRouter')
const accounts = require('../resources/accounts/accountRouter')

// Error Handling
const validadeError = require('../middlewares/error')

//Routes
app.use('/', welcome)
app.use('/api/v1/', accounts)

// ErrorMiddlewares
app.use(validadeError)

module.exports = app
