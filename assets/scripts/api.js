'use strict'
// const config = require('./config')

const indexBooks = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library-api.herokuapp.com/books'
  })
}

module.exports = {
  indexBooks
}
