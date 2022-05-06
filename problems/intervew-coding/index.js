// polindromic array 
// returns number of moves to make an array a polindromic array
// You are given an array A of size N. Your task is to find the minimum number of operations needed 
// to convert the given array to 'Palindromic Array'.
// Palindromic Array:[23,15,23] is a ‘Palindromic Array’ but [2,0,1] is not.
// The only allowed operation is that you can merge two adjacent elements in the array and replace them with their sum.

var polindromicArrayCount = (arr) => {
  var start = 0;
  var end = arr.length - 1;
  var count = 0;
  var x = arr.length % 2 === 0 ? (arr.length / 2) : Math.floor((arr.length / 2));
  var y = arr.length % 2 === 0 ? (arr.length / 2) - 2 : Math.floor((arr.length / 2));

  while (start < x && end > y) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    }
    else {
      if (arr[start] + arr[start+1] === arr[end]) {
        count++;
        var temp = arr[start] + arr[start+1];
        arr.splice(start, 2, temp);
      }
      if (arr[end] + arr[end-1] === arr[start]) {
        count++;
        var temp = arr[end] + arr[end-1];
        arr.splice(end-1, 2, temp);
      }
      start++;
      end--;
    }
  }

  console.log(count);
}

polindromicArrayCount([5, 3, 2, 3, 3, 5, 2, 3]);
