'use strict'
const api = require('./api')

const ui = require('./ui')

const showBooks = function (event) {
  event.preventDefault()
  console.log('into event')
  // const form = event.target
  api.indexBooks()
    .then(ui.showBooksSuccess)
    .catch(ui.showBooksFailure)
}
module.exports = {
  showBooks
}
