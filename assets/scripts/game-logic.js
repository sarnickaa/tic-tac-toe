
// define the function to be run when cell is clicked
// input X or O
// send ID of cell clicked to player array

//alternate X and O on clicks - set up counter to determine who's turn it is...
//if counter % 2 !== 0 - playerOne move: click = X
//IF counter % 2 === 0 - playerTwo move: click = O


//set up WIN/LOSS conditions:
//
const playerOne = []
const playerTwo = []
let counter = 1

const inputValue = function (event) {
  if (counter % 2 !== 0) {
  $(this).val("X")
  console.log($(this).attr('id'))
  const index = parseInt(($(this).attr('id')), 10)
  playerOne.push(index)
return counter++
  }
else {
  $(this).val("O")
  console.log($(this).attr('id'))
  const index = parseInt(($(this).attr('id')), 10)
  playerTwo.push(index)
return counter++
  }
}
console.log(playerOne)
console.log(playerTwo)
console.log(counter)


module.exports = {
  inputValue
}
