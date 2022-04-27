var board = document.querySelector('.board');
var isOdd = true;

for (var i = 1; i <= 64; i++) {
  var square = document.createElement('div');

  if (i % 2 === 0 && isOdd) square.className = 'black';
  else {
    if (i % 2 !== 0 && !isOdd) {
      square.className = 'black';
    }
  }
  if (i % 8 === 0) isOdd = !isOdd; 

  board.appendChild(square);
}