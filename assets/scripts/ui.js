
const gameLogic = require('./game-logic.js')
const store = require('./store.js')


const appearBoard = function () {
  // event.preventDefault()
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
  // $("#get-game").css("display", "none")
}

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

const onLoginSuccess = function (data) {
console.log('login success')
console.log(data)

$('.modal-body').html('')
$("#myModalLabel").html('Success!')
const scoreHTML = (`
      <h4>User Logged In</h4>
      <br>
    `)
$(".modal-body").html(scoreHTML)
$("#myModal").modal('show')
// $(".game-portal").css("display", "block")
$(".login").css("display", "none")
appearBoard()
store.user = data.user
}

const LoginError = function () {

}

const onRegisterSuccess = function (data) {
// TODO - generate get-game button on this screen
console.log('success')
console.log(data)

$('.modal-body').html('')
$("#myModalLabel").html('Success!')
const scoreHTML = (`
      <h4>User Registered!</h4>
      <h4>Please Log In To Play</h4>
      <br>
    `)
$(".modal-body").html(scoreHTML)
$("#myModal").modal('show')

$("#registerForm").css("display", "none")
gameLogic.resetScoreBoard()
}

const RegisterError = function () {

}

const onPwSuccess = function () {
console.log('pw changed successfully')
$('.modal-body').html('')
$("#myModalLabel").html('Success!')
const scoreHTML = (`
      <h4>User Changed Password</h4>
      <br>
    `)
$(".modal-body").html(scoreHTML)
$("#myModal").modal('show')
}

const onLogoutSuccess = function () {
console.log('logout success')
$(".scoreboard").css("display", "none")
$(".main-game").css("display", "none")
const message = (`
  <h4>User Logged out</h4>
  <h3>Thanks For Playing TicTacToe!</h3>
  `)
$("#logout-message").html(message)
// gameLogic.resetScoreBoard()

}

const logoutError = function () {
  $('.modal-body').html('')
  $("#myModalLabel").html('ERROR')
  const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Logging Out Again</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

// <h4>Title: Player 1 Wins!</h4>
// <br>
// <p>

module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw,
  displayScore1,
  displayScore2,
  displayTies,
  appearBoard,
  onRegisterSuccess,
  onLoginSuccess,
  onPwSuccess,
  onLogoutSuccess,
  logoutError
}
