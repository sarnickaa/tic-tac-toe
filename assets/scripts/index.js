'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameLogic = require('./game-logic.js')

console.log('hi')

$(() => {
  $("#1").click(gameLogic.inputValue)
  $("#2").click(gameLogic.inputValue)
  $("#3").click(gameLogic.inputValue)
  $("#4").click(gameLogic.inputValue)
  $("#5").click(gameLogic.inputValue)
  $("#6").click(gameLogic.inputValue)
  $("#7").click(gameLogic.inputValue)
  $("#8").click(gameLogic.inputValue)
  $("#9").click(gameLogic.inputValue)   //define function elsewhere
})


  // $("#0").click(function () {
  //   $("#0").val("X")
  // })
