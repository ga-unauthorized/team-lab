const config = require('../config')

const indexBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes'
  })
}

module.exports = {
  indexBooks
}
