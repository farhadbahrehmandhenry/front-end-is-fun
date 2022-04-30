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