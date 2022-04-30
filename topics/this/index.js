// this

// 1- referes to the object that is getting called
console.log("---------------- this")
var name = 'parvaneh';

function sayHi() {
  console.log(`Hi ${this.name}`);
}

var personOne = {
  name: 'farhad',
  sayHi: sayHi
}

var personTwo = {
  name: 'somayeh',
  sayHi: sayHi
}

sayHi(); // Hi parvaneh // run this in developer tool
personOne.sayHi() // Hi farhad
personTwo.sayHi() // Hi somayeh
 

console.log("---------------- loxically scoped")
// 2- "this" is not loxically scoped - arrow function is loxically scopped, but normal function not
// that's why we need to bind the normal function

var object = {
  name: 'farhad',
  sing() {
    console.log(`${this.name} is singing!`);

    var arrow = () => {
      console.log(`${this.name} is singing more!`);
    }

    function normal() {
      console.log(`${this.name} is singing! - who is this?`);
    }

    arrow();
    normal();
  }
}

object.sing();

console.log("---------------- call")
// 3- "call" is when we borrow another function's method to call on another object

var objectOne = {
  name: 'parvaneh',
  lastName: 'saboori',
  sayHi() {
    console.log(`Hi ${this.name} ${this.lastName}`);
  },
  sayHiAgain(name=this.name, lastName=this.lastName) {
    console.log(`Hi ${name} ${lastName}`);
  }
}

var objectTwo = {
  name: 'farhad',
  lastName: 'bahrehmand',
}

objectOne.sayHi(); // Hi parvaneh saboori
objectOne.sayHi.call(objectTwo); // Hi farhad bahrehmand
objectOne.sayHiAgain.call(objectTwo, 'somayeh', 'hashemi'); // Hi somayeh hashemi

console.log("---------------- apply")
// 4- "apply" is like "call", but we can pass args in array

var objectOne = {
  name: 'parvaneh',
  lastName: 'saboori',
  sayHi() {
    console.log(`Hi ${this.name} ${this.lastName}`);
  },
  sayHiAgain(name=this.name, lastName=this.lastName) {
    console.log(`Hi ${name} ${lastName}`);
  }
}

var objectTwo = {
  name: 'farhad',
  lastName: 'bahrehmand',
}

objectOne.sayHi(); // Hi parvaneh saboori
objectOne.sayHi.apply(objectTwo); // Hi farhad bahrehmand
objectOne.sayHiAgain.apply(objectTwo, ['somayeh', 'hashemi']); // Hi somayeh hashemi

console.log("---------------- bind")
// 5- "bind" is when we bind a method to a varable so we can call it later

var objectOne = {
  name: 'parvaneh',
  sayHi(name=this.name) {
    console.log(`Hi ${name}`)
  }
}

var objectTwo = {
  name: 'farhad',
}

var objectTwoSayHi = objectOne.sayHi.bind(objectTwo);
objectTwoSayHi('farhad'); // Hi farhad
objectTwoSayHi('somayeh'); // Hi somayeh

console.log("---------------- bind 2")
// 6- "bind"

var multiply = (a, b) => {
  console.log(a * b);
}

var multiplyToTen = multiply.bind(this, 10);

multiplyToTen(3); // 30

console.log("---------------- currying")
// 7- "currying" is when we parse a finction to multiple functions and each function return 
// something differenrt to above function

function first(a, b, c) {
  console.log(a*b*c);
}

first(2, 3, 4); // 24

function curry(a) {
  return function(b) {
    return function(c) {
      console.log(a*b*c);
    }
  }
}

curry(2)(3)(4); // 24
