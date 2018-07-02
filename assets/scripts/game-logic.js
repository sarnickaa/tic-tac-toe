
// const api = require('./api.js')
const ui = require('./ui.js')
const ajax = require('./ajax.js')
const api = require('./api.js')

let playerOne = []
// console.log(playerOne)
let playerTwo = []
// console.log(playerTwo)
let playerOneScore = 0
// console.log(playerOneScore)
let playerTwoScore = 0
// console.log(playerTwoScore)
let ties = 0
let counter = 0
// console.log(counter)
let cells = ["", "", "", "", "", "", "", "", ""]
let over = false
// console.log(over)

const inputValue = function(event) {

  if (counter % 2 === 0) {
    $(this).val("x")
    // console.log(this)
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    $(this).data("clicked", true)
    // console.log($(this.data))
    const move = $(this).val()
    cells.splice(index, 1, move)
    // console.log(cells)
    counter++
    over = false
    // console.log(counter)
    // console.log(playerTwo)
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    // console.log('player 1 has won ' + win)
    if (win) {
      playerOneScore++
      ui.scoreUpdate1(playerOneScore)
      over = true
      $(".game-board").off('click')
    } else if (!win && (playerOne.length + playerTwo.length === 9)) {
      ties++
      ui.showDraw(ties)
      ui.displayTies(ties)
      over = true
      $(".game-board").off('click')
    }
    ui.displayScore1(playerOneScore)
    ajax.updateGame(index, move, over)
      .then(ui.onUpdateSuccess)
      .catch(ui.updateError)
    // console.log('player 1 has scored ' + playerOneScore)

  } else {
    $(this).val("o")
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    $(this).data("clicked", true)
    const move2 = $(this).val()
    cells.splice(index, 1, move2)
    // console.log(index)
    // console.log(move2)
    // console.log(cells)
    over = false
    counter++
    // console.log(counter)
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
    if (win2) {
      // console.log('player 2 has won ' + win2)
      playerTwoScore++
      ui.scoreUpdate2(playerTwoScore)
      over = true
      $(".game-board").off('click')
    } else if (!win2 && (playerOne.length + playerTwo.length === 9)) {
      ties++
      ui.showDraw(ties)
      ui.displayTies(ties)
      over = true
      $(".game-board").off('click')
    }
    ui.displayScore2(playerTwoScore)
    ajax.updateGame(index, move2, over)
      .then(ui.onUpdateSuccess)
      .catch(ui.updateError)
  }
}

const paramaters = function(counter) {
  if (counter > 9) {
    $(".game-board").off('click')
  }
}

const preventDouble = function(event) {
  if ($(event.target).data("clicked") === true) {
    $(event.target).off()
    // $(event.target).css("cursor", "default")
  }
}

// checkWin function must:
// check player arrays against winning conditions
//    - declare winner
//    - declare tie
//    - declare finished game
// check arrays when playerOne.length >= 3 || playerTwo.length >= 3

// once player has at least 3 selections:
// check to see if at least 3  elements of the player selections match any of the winning arrays

// for each number in a players hand - check it against the number in the winning condition
// if that number doesn't exist - start checking the next winning condition array
// if at least 3 matching numbers are found - declare a winner (return)
// declare finished game when counter >= 9

const score = function(array) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  let win = false

  if (array.length >= 3) {
    // if the players hand is 3 or more:
    for (let i = 0; i < winningConditions.length; i++) {
      let winningArraySet = winningConditions[i]
      let winningArraySetFound = true
      // loop through all the sets in the winningConditions array
      for (let j = 0; j < winningArraySet.length; j++) {
        // for each array: loop over each number in the winningArraySet
        let numberFound = false
        // establish numberFound as a boolean to be changed later if number found
        for (let k = 0; k < array.length; k++) {
          // for each number in the players array:
          if (winningArraySet[j] === array[k]) {
            numberFound = true
            break
            // exit the loop if number is found
          }
        }
        if (numberFound === false) {
          winningArraySetFound = false
          // console.log('no match')
          break
        }
      }
      if (winningArraySetFound === true) {
        win = true
        // console.log('win')
        break
      }
    }
  }
  console.log(counter)
  return win
}

const resetForm = function() {

  // api.clearGame()
  $(".game-board:text").val("")
  $(".game-board:text").removeData("clicked")
  $(".game-board:text").off()
  // console.log($(".game-board:text"))
  $("#0").click(inputValue)
  $("#1").click(inputValue)
  $("#2").click(inputValue)
  $("#3").click(inputValue)
  $("#4").click(inputValue)
  $("#5").click(inputValue)
  $("#6").click(inputValue)
  $("#7").click(inputValue)
  $("#8").click(inputValue)
  counter = 0
  playerOne = []
  // console.log(playerOne)
  playerTwo = []
  // console.log(playerTwo)
  // console.log(counter)
  // api.createGame()
}

const resetScoreBoard = function() {
  playerOneScore = 0
  playerTwoScore = 0
}

module.exports = {
  inputValue,
  resetForm,
  resetScoreBoard
}
