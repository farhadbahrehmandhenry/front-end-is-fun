// speed up the app by caching the result of a function and restore it in the next time
var memoisation = () => {
  var cache = {};

  return calculation = (n) => {
    if (cache[n]) {
      console.log(`this is coming from cache, ${cache[n]}`);
      return cache[n];
    }
    else {
      cache[n] = n*2;
      console.log(`this is not from cache, ${n*2}`);
    }
  }
}

var multiplyTwo = memoisation();

multiplyTwo(3);
multiplyTwo(2);
multiplyTwo(1);
multiplyTwo(3);
multiplyTwo(4);
multiplyTwo(1);
