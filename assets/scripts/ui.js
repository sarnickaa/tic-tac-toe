


const scoreUpdate1 = function () {
  $("#myModalLabel").html("Player 1 Wins!<br />Player 1 score is")
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


module.exports = {
  scoreUpdate1,
  scoreUpdate2,
  showDraw
}
