const config = require('../config')

const indexBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books'
  })
}

module.exports = {
  indexBooks
}
