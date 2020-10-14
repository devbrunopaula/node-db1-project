const express = require('express')
const router = express.Router()
const AccountController = require('./accountController')

router
  .route('/accounts')
  .get(AccountController.index)
  .post(AccountController.create)
router.route('/accounts/:id').get(AccountController.show)
router.route('/accounts/:id').put(AccountController.update)
router.route('/accounts/:id').delete(AccountController.destroy)

module.exports = router
