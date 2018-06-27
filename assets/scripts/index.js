'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameLogic = require('./game-logic.js')
const api = require('./api.js')
const ui = require('./ui.js')

$(() => {
  $("#0").click(gameLogic.inputValue)
  $("#1").click(gameLogic.inputValue)
  $("#2").click(gameLogic.inputValue)
  $("#3").click(gameLogic.inputValue)
  $("#4").click(gameLogic.inputValue)
  $("#5").click(gameLogic.inputValue)
  $("#6").click(gameLogic.inputValue)
  $("#7").click(gameLogic.inputValue)
  $("#8").click(gameLogic.inputValue)
  $("#resetButton").click(gameLogic.resetForm)
  $("#login").on("submit", api.userLogin)
  $("#registerForm").on("submit", api.userRegister)
  $("#loginForm").on("submit", api.userLogin)
  $("#changepw").on("submit", api.userPwChange)
  $("#logoutform").on("submit", api.userLogout)
  $("#createButton").click(api.createGame)
  $("#getGamesButton").click(api.getGames)
})
