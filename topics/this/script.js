// 1
var name = 'parvaneh';

function sayName() {
  console.log(this.name + '!');
}

var personOne = {
  name: 'alireza',
  sayName: sayName
}

var personTwo = {
  name: 'parisa',
  sayName: sayName
}

sayName(); // parvaneh => run the code in developer tool
personOne.sayName() // alireza
personTwo.sayName() // parisa

// 2
// this not loxically scoped
var object = {
  name: 'billy',
  sing() {
    console.log('a', this.name); // => refers to object

    var firstFunction = () => {
      console.log('b', this.name); // refer to object because it's an arrow function
    }

    var secondFunction = function() {
      // refer to global object
      console.log('c', this); 
    }

    firstFunction();
    // before es6 and arrow function we had to go like => return secondFunction.bind(thid);
    // another way is to put => var self = this and use it every where.
    secondFunction();
  }
}

object.sing();

// 3
// call

var object1 = {
  firstName: 'farhad',
  lastName: 'bahrehmand',
  sayName(name=this.firstName, last=this.lastName) {
    console.log('hi ' + name + ' ' + last)
  }
}

var object2 = {
  firstName: 'som',
  lastName: 'hash',
} 

object1.sayName.call(object2); // hi som hash
object1.sayName.call(object2, 'somayeh', 'hashemi'); // hi somayeh hashemi

// apply
var object1 = {
  firstName: 'farhad',
  lastName: 'bahrehmand',
  sayName(name=this.firstName, last=this.lastName) {
    console.log('hi ' + name + ' ' + last)
  }
}

var object2 = {
  firstName: 'som',
  lastName: 'hash',
} 

object1.sayName.apply(object2); // hi som hash
object1.sayName.apply(object2, ['somayeh', 'hashemi']); // hi somayeh hashemi

// bind
var object1 = {
  firstName: 'farhad',
  lastName: 'bahrehmand',
  sayName(name=this.firstName, last=this.lastName) {
    console.log('hi ' + name + ' ' + last)
  }
}

var object2 = {
  firstName: 'som',
  lastName: 'hash',
} 

var callLater = object1.sayName.bind(object2);
callLater('somayeh', 'hashemi'); // hi somayeh hashemi

// currying
function multiply(a, b) {
  return a * b;
}

var multiplyToTen = funOne.bind(this, 10);

console.log(multiplyToTen(2)) // 20