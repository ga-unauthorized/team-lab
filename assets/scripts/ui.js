const consthowBooksSuccess = () => {
  successMessage('Here are your books!')
  $('#message').css('color', 'green')
}
const onshowBooksFailure = () => {
  failureMessage('Could not find books')
  $('#message').css('color', 'red')
}

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('form').trigger('reset')
}

module.exports = {
  onshowBooksSuccess,
  onshowBooksFailure
}
