const express = require('express')
const router = express.Router()
const AccountController = require('./accountController')

// valdiators
const bodyRequestValidation = require('../../middlewares/validation')

router
  .route('/accounts')
  .get(AccountController.index)
  .post(bodyRequestValidation.body(), AccountController.create)
router.route('/accounts/:id').get(AccountController.show)
router.route('/accounts/:id').put(AccountController.update)
router.route('/accounts/:id').delete(AccountController.destroy)

module.exports = router
