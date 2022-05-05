var nums = [1, 2, 3, 4, 5, 6];

var sum = nums.reduce((a, b) => a + b, 0);
var sumPlusTen = nums.reduce((a, b) => a + b, 10);

console.log(sum); // 21
console.log(sumPlusTen); // 31