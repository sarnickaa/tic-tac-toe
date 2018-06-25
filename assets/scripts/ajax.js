
const config = require('./config.js')
const store = require('./store.js')

const register = function (data) {
  console.log(data)
  console.log(config.apiUrl)
  console.log('ajax request gettin ' + data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  // login,
  register
}
