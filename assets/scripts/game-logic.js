
const ui = require('./ui.js')
const ajax = require('./ajax.js')
const api = require('./api.js')

let playerOne = []
let playerTwo = []
let counter = 0
let cells = ["", "", "", "", "", "", "", "", ""]
let over = false

const inputValue = function(event) {

  if (counter % 2 === 0) {
    $(this).val("x")
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    $(this).data("clicked", true)
    const move = $(this).val()
    cells.splice(index, 1, move)
    counter++
    over = false
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    if (win) {
      ui.scoreUpdate1()
      over = true
      $(".game-board").off('click')
    } else if (!win && (playerOne.length + playerTwo.length === 9)) {
      ui.showDraw()
      over = true
      $(".game-board").off('click')
    }
    ajax.updateGame(index, move, over)
      .then(ui.onUpdateSuccess)
      .catch(ui.updateError)
  } else {
    $(this).val("o")
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    $(this).data("clicked", true)
    const move2 = $(this).val()
    cells.splice(index, 1, move2)
    over = false
    counter++
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
    if (win2) {
      ui.scoreUpdate2()
      over = true
      $(".game-board").off('click')
    } else if (!win2 && (playerOne.length + playerTwo.length === 9)) {
      ui.showDraw()
      over = true
      $(".game-board").off('click')
    }
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
          break
        }
      }
      if (winningArraySetFound === true) {
        win = true
        break
      }
    }
  }
  return win
}

const resetForm = function() {
  $(".game-board:text").val("")
  $(".game-board:text").removeData("clicked")
  $(".game-board:text").off()
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
  playerTwo = []
}

module.exports = {
  inputValue,
  resetForm
}
