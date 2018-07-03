// const gameLogic = require('./game-logic.js')
const store = require('./store.js')
const config = require('./config.js')

// console.log(gameLogic)
// console.log(store)
// const api = require('./api.js')

// let playerOneScore = 0
// let playerTwoScore = 0

// const resetScoreBoard = function() {
//   playerOneScore = 0
//   playerTwoScore = 0
// }

let playerOne = []
// console.log(playerOne)
let playerTwo = []
// console.log(playerTwo)
// let playerOneScore = 0
// console.log(playerOneScore)
// let playerTwoScore = 0
// console.log(playerTwoScore)
// let ties = 0
let counter = 0
let over = false

const inputValue = function(event) {

  if (counter % 2 === 0) {
    $(this).val("x")
    // console.log(this)
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    $(this).data("clicked", true)
    // console.log($(this.data))
    const move = $(this).val()
    // cells.splice(index, 1, move)
    // console.log(cells)
    counter++
    over = false
    // console.log(counter)
    // console.log(playerTwo)
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    // console.log('player 1 has won ' + win)
    if (win) {
      // playerOneScore++
      scoreUpdate1()
      over = true
      $(".game-board").off('click')
    } else if (!win && (playerOne.length + playerTwo.length === 9)) {
      // ties++
      showDraw()
      // ui.displayTies(ties)
      over = true
      $(".game-board").off('click')
    }
    // ui.displayScore1(playerOneScore)
    updateGame(index, move, over)
      .then(onUpdateSuccess)
      .catch(updateError)
    // console.log('player 1 has scored ' + playerOneScore)

  } else {
    $(this).val("o")
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    $(this).data("clicked", true)
    const move2 = $(this).val()
    // cells.splice(index, 1, move2)
    // console.log(index)
    // console.log(move2)
    // console.log(cells)
    over = false
    counter++
    // console.log(counter)
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
    if (win2) {
      // console.log('player 2 has won ' + win2)
      // playerTwoScore++
      scoreUpdate2()
      over = true
      $(".game-board").off('click')
    } else if (!win2 && (playerOne.length + playerTwo.length === 9)) {
      // ties++
      showDraw()
      // ui.displayTies(ties)
      over = true
      $(".game-board").off('click')
    }
    // ui.displayScore2(playerTwoScore)
    updateGame(index, move2, over)
      .then(onUpdateSuccess)
      .catch(updateError)
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
    // $(event.target).css("cursor", "default")
  }
}

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

  // api.clearGame()
  $(".game-board:text").val("")
  $(".game-board:text").removeData("clicked")
  $(".game-board:text").off()
  // console.log($(".game-board:text"))
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
  // console.log(playerOne)
  playerTwo = []
  // console.log(playerTwo)
  // console.log(counter)
  // api.createGame()
}

const updateGame = function(index, value, over) {
  // console.log('update ran')
  // console.log(index)
  // console.log(value)
  // console.log(over)
  // console.log(store.game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": `${index}`,
          "value": `${value}`
        },
        "over": `${over}`
      }
    }
  })
}


const appearBoard = function() {

  $(".scoreboard").css("display", "flex")
  $(".main-game").css("display", "block")
  // $("#gameboard").css("display", "none")
  // gameLogic.resetScoreBoard()
}

// const appearGameBoard = function () {
//   $("#gameboard").css("display", "block")
//   api.createGame()
// }

const scoreUpdate1 = function() {
  $('.modal-body').html('')
  const scoreHTML = (`
          <h4>Player 1 Wins!</h4>
          <br>
        `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const scoreUpdate2 = function() {
  $('.modal-body').html('')
  const score2HTML = (`
        <h4>Player 2 Wins!</h4>
        <br>
      `)
  $(".modal-body").html(score2HTML)
  $("#myModal").modal('show')
}

const showDraw = function() {
  $('.modal-body').html('')
  const scoreHTML = (`
        <h4>We Tied!</h4>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

// const displayScore1 = function(score) {
//   const scoreHTML = (`
//     <h3>${score}</h3>
//     `)
//   $("#p1s").html(scoreHTML)
// }

// const displayScore2 = function(score) {
//   const scoreHTML = (`
//     <h3>${score}</h3>
//     `)
//   $("#p2s").html(scoreHTML)
// }
//
// const displayTies = function(score) {
//   const scoreHTML = (`
//     <h3>${score}</h3>
//     `)
//   $("#ts").html(scoreHTML)
// }

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
  resetForm()
  // $("#p2s").html('')
  // $("#p1s").html('')
  // resetScoreBoard()
  // console.log(playerOneScore)
  // console.log(playerTwoScore)
  // gameLogic.resetScoreBoard()
  // api.createGame()
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
  $("#registerForm").css("display", "block")
  // $("#loginForm").css("display", "block")
  // $("#loginblock").css("display", "block")

  $('.modal-body').html('')
  $("#myModalLabel").html('User Logged out')
  const message = (`
  <h4>User Logged out</h4>
  <h3>Thanks For Playing TicTacToe!</h3>
  `)
  // $("#logout-message").html(message)
  $(".modal-body").html(message)
  $("#myModal").modal('show')
  // $('#theGame input').each(function(event) {
  //   alert(event.target.id)
  // })
  // $('#theGame input').val("")
  // $("#0").click(gameLogic.inputValue)
  // debugger
  // $("#1").click(gameLogic.inputValue)
  // debugger
  // $("#2").click(gameLogic.inputValue)
  // debugger
  // $("#3").click(gameLogic.inputValue)
  // $("#4").click(gameLogic.inputValue)
  // $("#5").click(gameLogic.inputValue)
  // $("#6").click(gameLogic.inputValue)
  // $("#7").click(gameLogic.inputValue)
  // $("#8").click(gameLogic.inputValue)
// console.log("hihi")
// gameLogic.resetForm()
// console.log(gameLogic)
// playerOneScore = 0
// playerTwoScore = 0
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

// const onClearSuccess = function() {
//   console.log("success")
// }

const onClearError = function () {
  console.log("fail")
}

module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw,
  // displayScore1,
  // displayScore2,
  // displayTies,
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
  updateError,
  onClearError
  // onClearSuccess
  // appearGameBoard
}
