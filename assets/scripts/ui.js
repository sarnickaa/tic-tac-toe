const gameLogic = require('./game-logic.js')
const store = require('./store.js')


const appearBoard = function() {
  // event.preventDefault()
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
  // $("#get-game").css("display", "none")
}

const scoreUpdate1 = function(score) {
  $('.modal-body').html('')
  const scoreHTML = (`
          <h4>Player 1 Wins!</h4>
          <p>Player 1 Score Is ${score}</p>
          <br>
        `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const scoreUpdate2 = function(score) {
  $('.modal-body').html('')
  const score2HTML = (`
        <h4>Player 2 Wins!</h4>
        <p>Player 2 Score Is ${score}</p>
        <br>
      `)
  $(".modal-body").html(score2HTML)
  $("#myModal").modal('show')
}

const showDraw = function(score) {
  $('.modal-body').html('')
  const scoreHTML = (`
        <h4>We Tied!</h4>
        <p>Tie Games: ${score}</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const displayScore1 = function(score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#p1s").html(scoreHTML)
}

const displayScore2 = function(score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#p2s").html(scoreHTML)
}

const displayTies = function(score) {
  const scoreHTML = (`
    <h3>${score}</h3>
    `)
  $("#ts").html(scoreHTML)
}

const onLoginSuccess = function(data) {
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

const loginError = function(data) {
  console.log('error')
  $('.modal-body').html('')
  $("#myModalLabel").html('ERROR')
  const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Logging In Again</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onRegisterSuccess = function(data) {
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
  // gameLogic.resetScoreBoard()
}

const registerError = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('ERROR')
  const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Registering Again</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onPwSuccess = function() {
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

const onLogoutSuccess = function() {
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

const logoutError = function(error) {
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

const onCreateSuccess = function (data) {
  console.log('success', data)
  store.game = data.game
  console.log(store.game)
  console.log(data.game)
  console.log(data.game.id)
  console.log(store.game.id)
  // store.game.id = data.game.id
  $('.modal-body').html('')
  $("#myModalLabel").html('Game Created')
  const scoreHTML = (`
        <h4>User created New Game</h4>
        <p>Please Click The Gameboard To Start Playing!</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onGetSuccess = function (data) {
  console.log('success', data.games)
  console.log(data)
  $('.modal-body').html('')
  $("#myModalLabel").html('Games Retrieved')

  data.games.forEach(function(game) {
    const gameHTML = (`
        <h4>User Games:</h4>
        <p>${game.id}</p>
        <p>${game.cells}</p>
        <p>${game.over}</p>
        <br>
      `)
      $(".modal-body").append(gameHTML)
    })
  $("#myModal").modal('show')

  // $("#data-print").html(scoreHTML)
}

const onUpdateSuccess = function() {
  console.log('success update')
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
  logoutError,
  loginError,
  registerError,
  onCreateSuccess,
  onGetSuccess,
  onUpdateSuccess
}
