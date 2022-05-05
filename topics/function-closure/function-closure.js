// Variables declared Locally (inside a function) have Function Scope.
//even though JavaScript looks like it should have block scope because it uses curly braces { }, 
// a new scope is created only when you create a new function

// closure makes a function enable to access variables outside the function, without conflicting with global variables. It takes advantage of lexical scope so javascript knows what code is using what. 
// When you return a function inside another function, javascript knows and puts those variables in closure in memory where the function can access. 

var outerFunction = () => {
  var counter = 0;

  var innerFunction = () => {
    return counter +=1;
  }

  return innerFunction;
}

var counter = outerFunction();

console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3

var cat = {

    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly

        nestedFunction = function () {
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
        }

        nestedFunction();
    }
}
cat.printInfo(); //prints Name: window Color: undefined Age: undefined

// second example
var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        var that = this;
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly

        nestedFunction = function () {
            console.log("Name:", that.name, "Color:", that.color, "Age:", that.age); //prints correctly
        }
        nestedFunction();
    }
}
cat.printInfo();
//Because we bound this to a variable that, it will be available just like any other variable

var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        nestedFunction = function () {
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        }
        nestedFunction.call(this);
        nestedFunction.apply(this);

        var storeFunction = nestedFunction.bind(this);
        storeFunction();
    }
}
cat.printInfo();


var a = 1;
 
var x = () => {
 var b = 2;
 console.log(a)
 return function y() {
   var c = 3;
   console.log(a, b)
 
   return function z() {
     var d = 4;
     console.log(a, b, c, d)
   }
 }
}
 
x()()() // 1 / 1 2 / 1 2 3 4



function a() {
 var count = 0;
 
 return function b() {
   if (count < 1) {
     count++;
     return console.log(count)
   }
   else return
 }
}
var callOnce = a();
callOnce()
callOnce()
callOnce()
callOnce()

