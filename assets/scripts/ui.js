
const store = require('./store.js')
const config = require('./config.js')

let playerOne = []
let playerTwo = []
let counter = 0
let over = false

const inputValue = function(event) {

  if (counter % 2 === 0) {
    $(this).val("x")
    const index = parseInt(($(this).attr('id')), 10)
    playerOne.push(index)
    $(this).data("clicked", true)
    const move = $(this).val()
    counter++
    over = false
    preventDouble(event)
    paramaters(counter)
    let win = score(playerOne)
    if (win) {
      scoreUpdate1()
      over = true
      $(".game-board").off('click')
    } else if (!win && (playerOne.length + playerTwo.length === 9)) {
      showDraw()
      over = true
      $(".game-board").off('click')
    }
    updateGame(index, move, over)
      .then(onUpdateSuccess)
      .catch(updateError)
  } else {
    $(this).val("o")
    const index = parseInt(($(this).attr('id')), 10)
    playerTwo.push(index)
    $(this).data("clicked", true)
    const move2 = $(this).val()
    over = false
    counter++
    preventDouble(event)
    paramaters(counter)
    let win2 = score(playerTwo)
    if (win2) {
      scoreUpdate2()
      over = true
      $(".game-board").off('click')
    } else if (!win2 && (playerOne.length + playerTwo.length === 9)) {
      showDraw()
      over = true
      $(".game-board").off('click')
    }
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
  return win
}

const resetForm = function() {
  $(".game-board:text").val("")
  $(".game-board:text").removeData("clicked")
  $(".game-board:text").off()
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
  playerTwo = []
}

const updateGame = function(index, value, over) {
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
}

const scoreUpdate1 = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('X WINS!')
  const scoreHTML = (`
          <h4>Player 1 Wins!</h4>
          <br>
        `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const scoreUpdate2 = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('O WINS!')
  const score2HTML = (`
        <h4>Player 2 Wins!</h4>
        <br>
      `)
  $(".modal-body").html(score2HTML)
  $("#myModal").modal('show')
}

const showDraw = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('DRAW!')
  const scoreHTML = (`
        <h4>We Tied!</h4>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onLoginSuccess = function(data) {
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
  }

const loginError = function(data) {
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
  $(".scoreboard").css("display", "none")
  $(".main-game").css("display", "none")
  $(".login").css("display", "block")
  $("#registerForm").css("display", "block")

  $('.modal-body').html('')
  $("#myModalLabel").html('User Logged out')
  const message = (`
  <h4>User Logged out</h4>
  <h3>Thanks For Playing TicTacToe!</h3>
  `)
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
  store.game = data.game
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
  // console.log('success update')
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

const onClearError = function () {
  console.log("fail")
}

module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw,
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
}
