const express = require('express')
const db = require('../../data/dbConfig')

const newAccount = (req, res, next) => {
  //   console.log(123)
  req.send(123)
  //   try {
  //     const payload = {
  //       title: req.body.title,
  //       contents: req.body.contents,
  //     }

  //     // translates to `INSERT INTO messages (title, contents) VALUES (?, ?);`

  //     const [id] = await db.insert(payload).into('accounts')

  //     res.status(201).json(await getMessageByID(id))
  //   } catch (err) {
  //     next(err)
  //   }
}

function getMessageByID(id) {
  return db
    .first('*') // a shortcut for destructuring the array and limit 1
    .from('messages')
    .where('id', id)
}

module.exports = {
  newAccount,
}
