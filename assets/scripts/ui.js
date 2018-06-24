
const gameLogic = require('./game-logic.js')

const scoreUpdate1 = function (score) {
  $('.modal-body').html('')
  const scoreHTML = (`
          <h4>Player 1 Wins!</h4>
          <p>Player 1 Score Is ${score}</p>
          <br>
        `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const scoreUpdate2 = function (score) {
  $('.modal-body').html('')
  const score2HTML = (`
        <h4>Player 2 Wins!</h4>
        <p>Player 2 Score Is ${score}</p>
        <br>
      `)
  $(".modal-body").html(score2HTML)
  $("#myModal").modal('show')
}

const showDraw = function (score) {
  $('.modal-body').html('')
  const scoreHTML = (`
        <h4>We Tied!</h4>
        <p>Tie Games: ${score}</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const displayScore1 = function (score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#p1s").html(scoreHTML)
}

const displayScore2 = function (score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#p2s").html(scoreHTML)
}

const displayTies = function (score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#ts").html(scoreHTML)
}

// TODO display tie scores

// <h4>Title: Player 1 Wins!</h4>
// <br>
// <p>

module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw,
  displayScore1,
  displayScore2,
  displayTies
}
