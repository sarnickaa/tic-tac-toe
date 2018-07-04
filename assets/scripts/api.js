const ui = require('./ui.js')
const ajax = require('./ajax.js')
const getFormFields = require('../../lib/get-form-fields')

const createGame = function(event) {
  ajax.create()
    .then(ui.onCreateSuccess)
    .catch(ui.createError)
}

const clear = function() {
  $("#email, #pw, #pwconf").focus(function() {
    if ($(this).attr("value") !== "") {
      $(this).attr("value", "")
    }
  })
}

const userLogin = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  ajax.login(data)
    .then(ui.onLoginSuccess)
    .then(createGame)
    .catch(ui.loginError)
    $("#loginForm")[0].reset()
}

const userRegister = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  ajax.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
    $("#registerForm")[0].reset()
}

const userPwChange = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  ajax.pwChange(data)
    .then(ui.onPwSuccess)
    .catch(ui.pwError)
  $("#changepw")[0].reset()
}

const userLogout = function(event) {
  event.preventDefault()
  ajax.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.logoutError)
}

const getGames = function(event) {
  event.preventDefault()
  ajax.getUserGames()
    .then(ui.onGetSuccess)
    .catch(ui.getError)
}

module.exports = {
  clear,
  userLogin,
  userRegister,
  userPwChange,
  userLogout,
  createGame,
  getGames
}
