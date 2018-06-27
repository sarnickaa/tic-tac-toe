const config = require('./config.js')
const store = require('./store.js')
const ui = require('./ui.js')

const register = function(data) {
  console.log(data)
  console.log(config.apiUrl)
  console.log('ajax request gettin ' + data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const login = function(data) {
  console.log(data)
  console.log(config.apiUrl)
  console.log('ajax login request getting ' + data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const pwChange = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logout = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function() {
  console.log('create game ran')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUserGames = function() {
  console.log('get game ran')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function(index, value, over) {
  console.log('update ran')
  console.log(index)
  console.log(value)
  console.log(over)
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

module.exports = {
  register,
  login,
  pwChange,
  logout,
  create,
  getUserGames,
  updateGame
}
