const bodyRequestSchema = require('./validationSchemas/bodyRequest.Schema')

class Validation {
  body() {
    return async (req, res, next) => {
      if (Object.keys(req.body).length === 0)
        return res.status(400).json({error: 'Body request may not be empty...'})

      try {
        await bodyRequestSchema.validate(req.body)
        next()
      } catch (error) {
        res.status(400).json(error.message)
      }
    }
  }
}

module.exports = new Validation()
