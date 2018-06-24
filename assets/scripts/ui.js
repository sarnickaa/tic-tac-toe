
const gameLogic = require('./game-logic.js')

const scoreUpdate1 = function (score) {

    const scoreHTML = (`
          <h4>Player 1 score is ${score}</h4>
          <p></p>
          <p></p>
          <br>
        `)
console.log(gameLogic.playerOneScore)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const scoreUpdate2 = function () {
  $("#myModalLabel").html("Player 2 Wins!<br />Player 2 score is")
  $("#myModal").modal('show')
}

const showDraw = function () {
  $("#myModalLabel").html("we tied!")
  $("#myModal").modal('show')
}

// <h4>Title: Player 1 Wins!</h4>
// <br>
// <p>

module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw
}
