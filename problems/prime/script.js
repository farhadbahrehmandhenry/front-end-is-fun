// Get the prime numbers less than n - 2, 3, 5, 7, 11, 13
var getPrime = (n) => {
  var count = 0;

  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) count++
  }

  return count;
}

var isPrime = (n) => {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}


console.log(getPrime(10));
