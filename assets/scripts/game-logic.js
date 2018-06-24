// define the function to be run when cell is clicked
// input X or O
// send ID of cell clicked to player array

//alternate X and O on clicks - set up counter to determine who's turn it is...
//if counter % 2 !== 0 - playerOne move: click = X
//IF counter % 2 === 0 - playerTwo move: click = O

// set up a method to prevention paramaters:
// player may not click a filled square
// game total can not be 9 clicks
// score game after 9th
//

// set up WIN/LOSS conditions: scoring function

const api = require('./api.js')
const ui = require('./ui.js')

let playerOne = []
console.log(playerOne)
let playerTwo = []
console.log(playerTwo)
let playerOneScore = 0
console.log(playerOneScore)
let playerTwoScore = 0
console.log(playerTwoScore)
let ties = 0
let counter = 0
console.log(counter)


const appearBoard = function (event) {
    event.preventDefault()
    // function to redirect to api.js for log in ajax calls

}

const inputValue = function(event) {
  if (counter % 2 === 0) {
    $(this).val("X")
    console.log(this)
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    $(this).data("clicked", true)
    console.log($(this.data))
    counter++
    console.log(counter)
    console.log(playerTwo)
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    console.log('player 1 has won ' + win)
      if (win) {
        playerOneScore++
        ui.scoreUpdate1(playerOneScore)
        $(".game-board").off('click')
      } else if (!win && (playerOne.length + playerTwo.length === 9)) {
        ties++
        ui.showDraw(ties)
        $(".game-board").off('click')
      }
      //
      // TODO ui.displayScore1()
      console.log('player 1 has scored ' + playerOneScore)

  } else {
    $(this).val("O")
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    $(this).data("clicked", true)
    counter++
    console.log(counter)
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
      if (win2) {
        console.log('player 2 has won ' + win2)
        playerTwoScore++
        ui.scoreUpdate2(playerTwoScore)
        $(".game-board").off('click')
      } else if (!win2 && (playerOne.length + playerTwo.length === 9)) {
        ties++
        ui.showDraw(ties)
        $(".game-board").off('click')
      }
      // TODO ui.displayScore2()
    console.log('player 2 has scored ' + playerTwoScore)
    // draw(playerOne, playerTwo)
  }
}

const paramaters = function (counter) {
    if (counter > 9) {
    $(".game-board").off('click')
  }
}

const preventDouble = function (event) {
  if ($(event.target).data("clicked") === true) {
    $(event.target).off()
  }
}

// const draw = function (array1, array2) {
//   if (array1.length + array2.length === 9 && ) {
//     console.log('we tied!')
//     ties++
//     console.log(ties)
//     ui.showDraw(ties)
//   }
// }


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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
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
  // debugger
  $(".game-board:text").val("")
  debugger
  $(".game-board:text").removeData("clicked")
  $(".game-board:text").off()
  debugger
  console.log($(".game-board:text"))
  debugger
  $("#1").click(inputValue)
  debugger
  $("#2").click(inputValue)
  debugger
  $("#3").click(inputValue)
  debugger
  $("#4").click(inputValue)
  debugger
  $("#5").click(inputValue)
  debugger
  $("#6").click(inputValue)
  debugger
  $("#7").click(inputValue)
  debugger
  $("#8").click(inputValue)
  debugger
  $("#9").click(inputValue)
  debugger
  counter = 0
  playerOne = []
  console.log(playerOne)
  playerTwo = []
  console.log(playerTwo)
  console.log(counter)
}

module.exports = {
  inputValue,
  resetForm,
  appearBoard
}
