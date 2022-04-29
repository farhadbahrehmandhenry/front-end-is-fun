var nestedArray = [[1,1],2,[1,[4, 5, [6]],1]];
var flattenArray = [];

// Array.isArray()
// typeof [] === 'object'
var loopArray = (array) => {
  array.forEach(item => {
    if (Array.isArray(item)) loopArray(item);
    else flattenArray.push(item);
  });
}

loopArray(nestedArray);

console.log(flattenArray);
