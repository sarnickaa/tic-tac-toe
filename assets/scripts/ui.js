const gameLogic = require('./game-logic.js')
const store = require('./store.js')


const appearBoard = function() {
  $(".main-game").css("display", "block")
  $(".scoreboard").css("display", "flex")
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
  // console.log('login success')
  // console.log(data)
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Logged In</h4>
      <p>Click 'Create Saved Game' If You Want To Save Your Moves</p>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
  $(".login").css("display", "none")
  appearBoard()
  store.user = data.user
}

const loginError = function(data) {
  // console.log('error')
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
  // console.log('success')
  // console.log(data)
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
}

const registerError = function(error) {
  if (error) {
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
}

const onPwSuccess = function() {
  // console.log('pw changed successfully')
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Changed Password</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const pwError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Entering Passwords Again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onLogoutSuccess = function() {
  // console.log('logout success')
  $(".scoreboard").css("display", "none")
  $(".main-game").css("display", "none")
  $(".login").css("display", "block")

  $('.modal-body').html('')
  $("#myModalLabel").html('User Logged out')
  const message = (`
  <h4>User Logged out</h4>
  <h3>Thanks For Playing TicTacToe!</h3>
  `)
  // $("#logout-message").html(message)
  $(".modal-body").html(message)
  $("#myModal").modal('show')
}

const logoutError = function(error) {
  if (error) {
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
}

const onCreateSuccess = function(data) {
  // console.log('success', data)
  store.game = data.game
  // console.log(store.game)
  // console.log(data.game)
  // console.log(data.game.id)
  // console.log(store.game.id)
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

const createError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Check Your Internet Connection</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onGetSuccess = function(data) {
  // console.log('success', data.games)
  // console.log(data)
  $('.modal-body').html('')
  $("#myModalLabel").html('Games Retrieved')
  data.games.forEach(function(game) {
    const gameHTML = (`
        <p>Game ID: ${game.id}</p>
        <p>Game Moves: ${game.cells}</p>
        <p>Game Over: ${game.over}</p>
        <p>Player ID: ${game.player_x.id}</p>
        <p>Player Email: ${game.player_x.email}</p>
        <br>
      `)
    $(".modal-body").append(gameHTML)
  })
  $("#myModal").modal('show')
}

const getError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Check Your Internet Connection</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onUpdateSuccess = function() {
  console.log('success update')
}

const updateError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Check Your Internet Connection</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

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
  pwError,
  onLogoutSuccess,
  logoutError,
  loginError,
  registerError,
  onCreateSuccess,
  createError,
  onGetSuccess,
  getError,
  onUpdateSuccess,
  updateError
}
