
// define the function to be run when cell is clicked
// input X or O
// send ID of cell clicked to player array

//alternate X and O on clicks - set up counter to determine who's turn it is...
//if counter % 2 !== 0 - playerOne move: click = X
//IF counter % 2 === 0 - playerTwo move: click = O

// set up a method to prevention paramaters:
// player may not click a filled square
// game total can not be 9 clicks - score game after 9th
//

// set up WIN/LOSS conditions: scoring function


const playerOne = []
const playerTwo = []
let counter = 1


const inputValue = function (event) {
  if (counter % 2 !== 0) {
  $(this).val("X")
  console.log($(this).attr('id'))
  const index = parseInt(($(this).attr('id')), 10)
  playerOne.push(index)
  counter++
  paramaters(counter)
 // return counter++
 // paramaters(counter)
  }
else {
  $(this).val("O")
  console.log($(this).attr('id'))
  const index = parseInt(($(this).attr('id')), 10)
  playerTwo.push(index)
  counter++
  paramaters(counter)
// return counter++
// paramaters(counter)
// console.log(counter)
  }
}


const paramaters = function (counter) {
  if (counter > 9) {
    $(".game-board").off('click')
    // console.log($(this))
    }
  }






console.log(playerOne)
console.log(playerTwo)
// console.log(counter)

module.exports = {
  inputValue,
  // paramaters
}
