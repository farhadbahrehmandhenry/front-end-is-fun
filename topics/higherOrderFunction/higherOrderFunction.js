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

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
 }
 noisy(Math.min)(3, 2, 1);
 // → calling with [3, 2, 1]
 // → called with [3, 2, 1] , returned 1
 