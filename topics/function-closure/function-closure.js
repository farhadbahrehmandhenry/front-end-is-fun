var outerFunction = () => {
  var counter = 0;

  var innerFunction = () => {
    return counter +=1;
  }

  return innerFunction;
}

var counter = outerFunction();

console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3



