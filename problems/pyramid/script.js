// draw this using javascript

// -----@-----
// ----@@@----
// ---@@@@@---
// --@@@@@@@--
// -@@@@@@@@@-
// @@@@@@@@@@@

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var col = 11;
var row = 6

var min = 5;
var max = 5;
var line = '';

for (var j = 0; j < row; j++) {
  for (var i = 0; i < col; i++) {
    if (i < min || i > max) line += '-';
    else  line += '@';
  }

  console.log(line);
  line = '';
  min--;
  max++
}

