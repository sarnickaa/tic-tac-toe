
const ui = require('./ui.js')
const ajax = require('./ajax.js')
const getFormFields = require('../../lib/get-form-fields')

const clear = function() {
  $("#email, #pw, #pwconf").focus(function() {
    if ($(this).attr("value") !== "") {
      $(this).attr("value", "")
    }
  })
}


const userLogin = function (event) {
  event.preventDefault()
  const data = getFormFields(this)


  ajax.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.loginError)
}

const userRegister = function (event) {
  console.log('sign up worked')
  // $(".main-game").css("display", "block")
  // $(".scoreboard").css("display", "flex")
  // $(".login").css("display", "none")
  event.preventDefault()
  const data = getFormFields(this)
  ajax.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
}

const userPwChange = function (event) {
  console.log('pw change function fired')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)

  ajax.pwChange(data)
    .then(ui.onPwSuccess)
    .catch(ui.pwError)
}

const userLogout = function (event) {
  event.preventDefault()
  ajax.logout()
  .then(ui.onLogoutSuccess)
  .catch(ui.logoutError)
}

//
module.exports = {
  clear,
  userLogin,
  userRegister,
  // userLogin,
  userPwChange,
  userLogout
  // login,
  // register
}
