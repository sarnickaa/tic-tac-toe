
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
    .then(uI.onLoginSuccess)
    .catch(uI.LoginError)
}

const userRegister = function () {
  event.preventDefault()
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
  $(".login").css("display", "none")
  ajax.register()
    .then(uI.onRegisterSuccess)
    .catch(uI.registerError)
}


//
module.exports = {
  clear,
  userLogin,
  userRegister
}
