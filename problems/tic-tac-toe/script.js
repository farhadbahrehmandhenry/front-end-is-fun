var cells = document.querySelectorAll('.cell');
var winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 7, 8], [0, 4, 8], [2, 4, 6]
];

var xMoves = [];
var oMoves = [];
var turn = 'X';

var resetGame = () => {
  cells.forEach(cell => {
    cell.classList.remove('selected');
    cell.classList.remove('winner');
    cell.innerText = '';
  });

  xMoves = [];
  oMoves = [];
}

var alertWinner = (winner, moves) => {
  var winCondition = winConditions.find(condition => condition.every(move => moves.includes(move)));
  winCondition.forEach(condition => cells[condition].classList.add('winner'));

  setTimeout(() => {
    alert(winner);

    resetGame();
  }, 500);
}

cells.forEach((cell, i) => {
  cell.addEventListener('click', () => {
    if (!cell.classList.contains('selected')) {
      cell.classList.add('selected');
      cell.innerText = turn;

      if (turn === 'X') xMoves.push(i);
      if (turn === 'O') oMoves.push(i);

      turn = turn === 'X' ? 'O' : 'X';

      var xWins = winConditions.some(condition => condition.every(move => xMoves.includes(move)));
      var oWins = winConditions.some(condition => condition.every(move => oMoves.includes(move)));

      if (xWins) alertWinner('X wins', xMoves);
      if (oWins) alertWinner('O wins', oMoves);
    }
  });
});