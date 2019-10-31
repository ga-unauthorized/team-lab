const api = require('./api')
const ui = require('./ui')

const onshowBooks = function (event) {
  event.preventDefault()
  const form = event.target
  api.onCreateWorkout(formData)
    .then(ui.onshowBooksSuccess)
    .catch(ui.onshowBooksFailure)
  // console.log(api.displayWorkouts().then(response => response.json()))
}
module.exports = {
  onshowBooks
}
