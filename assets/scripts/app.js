
'use strict'
const uiEvents = require('./events.js')


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#button').on('click', uiEvents.showBooks)
  // $('#message').on('submit', uiEvents.showBooks)
})
