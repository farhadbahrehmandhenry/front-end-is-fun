function getMin(fn) {
  var nums = [1, 2, 3, 4];

  return fn(...nums);
}

console.log(getMin(Math.min)); // 1

function sayMyName() {
  return function(name) {
    console.log('your name is ' + name);
  }
}

console.log(sayMyName()('farhad'))
