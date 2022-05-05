function Person (firstName){
    this.firstName = firstName
}

Person.prototype.lastName = 'bahrehmand'
Person.prototype.sayHi = function() {
  console.log('hi ' + this.firstName + ' ' + this.lastName);
}

var farhad = new Person('farhad');

console.log(farhad) // {firstName: 'farhad}
console.log(farhad.lastName) // 'bahrehmand'
console.log(farhad.sayHi()) // 'hi farhad bahrehmand


Date.prototype.lastYear = function() { // arrow function wont work because it refers to function not the object
  return this.getFullYear();
 }
  
 console.log(new Date('1988-01-01').lastYear()) // 1987
 // Or we can access and manipulate a property like
 Array.prototype.map = function () {
 // ...
 }
 
 ///////
 var x = {
  a: 1
 }
  
 var y = {
  b: 2
 }
  
 y.__proto__ = x;
  
 console.log(y.a) // 1
 
 