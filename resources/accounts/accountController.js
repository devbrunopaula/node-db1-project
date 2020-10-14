'use strict'
const db = require('../../data/dbConfig')
const Account = require('./accountModel')

const index = async (req, res, next) => {
  try {
    const getAccounts = await Account.index()
    res.status(200).json(getAccounts)
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    budget: req.body.budget,
  }

  try {
    const [newAccount] = await Account.create(payload)
    res.status(201).json(newAccount)
  } catch (error) {
    next(error)
  }
}

const show = async (req, res, next) => {
  const {id} = req.params
  try {
    const [getAccountById] = await Account.show(id)
    res.status(200).json(getAccountById)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  const {id} = req.params

  const {name, budget} = req.body

  const payload = {
    name,
    budget,
  }

  try {
    const [updateAccout] = await Account.update(id, payload)
    res
      .status(200)
      .json({message: 'Account was successfully updated..', updateAccout})
  } catch (error) {
    next(error)
  }
}

const destroy = async (req, res, next) => {
  const {id} = req.params
  try {
    await Account.remove(id)
    res.status(200).json({message: `Account with ID# ${id} has benn deleted.`})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
}
