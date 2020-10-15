const yup = require('yup')

let schema = yup.object().shape({
  name: yup.string().required(),
  budget: yup.number().required().positive().integer(),
})

module.exports = schema
