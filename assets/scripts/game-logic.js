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

const playerOne = []
const playerTwo = []
let playerOneScore = 0
console.log(playerOneScore)
let playerTwoScore = 0
console.log(playerTwoScore)
let ties = 0
let counter = 0
const currentPlayer = 0

const inputValue = function (event) {
  if (counter % 2 === 0) {
  // if (currentPlayer == 0) {
    $(this).val("X")
    // console.log($(this).attr('id'))
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    console.log(playerOne)
    $(this).data("clicked", true)
    console.log($(this).data())
    counter++
    // paramaters2()
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    console.log(win)
    if (win) {
      playerOneScore++
    }
    console.log(playerOneScore)
    // scoreIncrement()
    // debugger
    // score()
    // return counter++
  } else {
    $(this).val("O")
    // console.log($(this).attr('id'))
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    // playerTwo.sort()
    console.log(playerTwo)
    $(this).data("clicked", true)
    console.log($(this).data())
    counter++
    // paramaters2()
    // preventDouble(event)
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
      if (win2) {
        playerTwoScore++
      }
      console.log(playerTwoScore)
    // scoreIncrement()

    // debugger
    // debugger
    // score()
    // return counter++
    // console.log(counter)
  }
}

const paramaters = function(counter) {
  if (counter > 9) {
    $(".game-board").off('click')
    // console.log($(this))
    // run score game function TODO
  }
}

const preventDouble = function(event) {
  // debugger
  if ($(event.target).data("clicked") === true) {
    $(event.target).off()
    // debugger
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
/*

*/

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
          console.log('no match')
          break
        }
      }
      if (winningArraySetFound === true) {
        win = true
        console.log('win')
        break
      }
    }
  }
  console.log(counter)
  // console.log('win')
  // debugger
  return win
  // console.log('win')
}

// let scoreIncrement = function () {
//   if (score(playerOne)) {
//     playerOneScore++
//   } else if (score(playerTwo)) {
//       playerTwoScore++
//   }
//   else {
//     ties++
//   }
// }
// console.log(scoreIncrement())


// let scoreIncrement = function() {
//   if (counter % 2 !== 0) {
//     playerOneScore += 1
//     console.log('player 1 score is ' + playerOneScore)
//   } else {
//     playerTwoScore += 1
//     console.log('player 1 score is ' + playerTwoScore)
//   }
// }
//  scoreIncrement()
//  console.log('player 1 score is ' + playerOneScore)
//  console.log('player 1 score is ' + playerTwoScore)





// for (let i = 0; i < winningConditions[i]; i++) {
//   for (let j = 0; j < winningConditions[i][j]) {
//       if array[k] === winningConditions[i][j]
//   }
// }

// for (let i = 0; i < winningConditions.length, i++)

//     array.sort()
//     array.pop()
//     console.log(array)
//   for (let i = 0; i < winningConditions.length; i++) {
//     debugger
//     // console.log(winningConditions[i].toString())
//     // console.log(array.toString())
//     if (array.toString() === winningConditions[i].toString()) {
//       debugger
//       playerOneScore++
//       debugger
//       console.log('win')
//       'playerOne wins!'
//     } else if (array.toString() === winningConditions[i].toString()) {
//       playerTwoScore++
//       console.log('player 2 wins')
//       'playerTwo wins'
//     } else {
//       ties++
//       return 'we tied!'
//       console.log('tie')
//     }
//   }
// }

// score(playerOne, playerTwo)
// const paramaters2 = function () {
//   if ($(".game-board").val() !== null) {
//     $(".game-board").off('click')
//   }
// }
// paramaters2()

// ((playerOne.length >= 3) || (playerTwo.length >= 3))

console.log(playerOne)
console.log(playerTwo)
// console.log(counter)

module.exports = {
  inputValue,
  // paramaters
}
