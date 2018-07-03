const ui = require('./ui.js')
const ajax = require('./ajax.js')
// const gameLogic = require('./game-logic')
const getFormFields = require('../../lib/get-form-fields')

const createGame = function(event) {
  // event.preventDefault()
  console.log("i got here!")
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
  console.log('sign up worked')
  // $(".main-game").css("display", "block")
  // $(".scoreboard").css("display", "flex")
  // $(".login").css("display", "none")
  event.preventDefault()
  const data = getFormFields(this)
  ajax.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
    $("#registerForm")[0].reset()
}

const userPwChange = function(event) {
  console.log('pw change function fired')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)

  ajax.pwChange(data)
    .then(ui.onPwSuccess)
    .catch(ui.pwError)
  $("#changepw")[0].reset()
}

const userLogout = function(event) {
  event.preventDefault()
  ajax.logout()
    .then(ui.onLogoutSuccess)
    // .then(gameLogic.resetForm)
    // console.log('reset logout')
    // .then(gameLogic.resetScoreBoard)
    // console.log('reset score')
    .catch(ui.logoutError)
}



const getGames = function(event) {
  event.preventDefault()
  ajax.getUserGames()
    .then(ui.onGetSuccess)
    .catch(ui.getError)
}

// const clearGame = function(event){
//   // event.preventDefault()
//   ajax.emptyGame()
//     .then(ui.onClearSuccess)
//     .catch(ui.onClearError)
//   }

//
module.exports = {
  clear,
  userLogin,
  userRegister,
  userPwChange,
  userLogout,
  createGame,
  getGames
  // clearGame
}
