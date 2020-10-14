const db = require('../../data/dbConfig')

const index = async () => {
  try {
    const accounts = await db.select('*').from('accounts').orderBy('id')
    return accounts
  } catch (error) {
    next(error)
  }
}

const show = async (id) => {
  const accountsById = await db.select('*').from('accounts').where('id', id)

  return accountsById
}
const create = async (payload) => {
  const [newAccount] = await db('accounts').returning('id').insert(payload)

  return await show(newAccount)
}

const update = async (id, payload) => {
  const [accountUpdateID] = await db('accounts')
    .where('id', id)
    .returning('id')
    .update(payload)
  return await show(accountUpdateID)
}

const remove = async (id) => {
  const deleteAccount = await db('accounts').where('id', id).del()

  return deleteAccount
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
}
