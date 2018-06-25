
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
  const data = getFormFields(this)
  event.preventDefault()

  ajax.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.LoginError)
}

const userRegister = function (event) {
  debugger
  console.log('sign up worked')
  debugger
  // $(".main-game").css("display", "block")
  // $(".scoreboard").css("display", "flex")
  // $(".login").css("display", "none")
  const data = getFormFields(this)
  debugger
  event.preventDefault()
  debugger
  ajax.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
}

//
module.exports = {
  clear,
  userLogin,
  userRegister
  // login,
  // register
}
