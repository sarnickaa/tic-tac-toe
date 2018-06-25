
const ui = require('./ui.js')

const clear = function() {
  $("#email, #pw, #pwconf").focus(function() {
    if ($(this).attr("value") !== "") {
      $(this).attr("value", "")
    }
  })
}



const userLogin = function () {
  event.preventDefault()
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
  $(".login").css("display", "none")
  ajax.login()
    .then(ui.onLoginSuccess)
    .catch(ui.LoginError)
}

const userRegister = function () {
  event.preventDefault()
  ajax.register()
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
  $(".login").css("display", "none")
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
}


//
module.exports = {
  clear,
  userLogin,
  userRegister
}
