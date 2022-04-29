var nestedObj = {a: 1, b: 2, c: {d: 3, e: {f: 4}}}
var flattenObject = {};

var loopItem = (items) => {
  for (item in items) {
    if (typeof items[item] === 'object') loopItem(items[item]);
    else flattenObject[item] = items[item];
  }
}

loopItem(nestedObj);

console.log(flattenObject)
