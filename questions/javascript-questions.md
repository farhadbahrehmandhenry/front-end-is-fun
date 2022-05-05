- GLOBAL variable - can be accessed from any script or function.
- What's a typical use case for anonymous functions?
  -- iife
- What is the difference between `==` and `===`?
  == in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
  === is used for comparing two variables, but this operator also checks datatype and compares two values.
- What is strict mode?
  - With strict mode, you can not, for example, use undeclared variables.
- Explain the difference between mutable and immutable objects.

  - immutable => cant change or modified - String, Number

- Asynchronous Javascript

  - Event loop: In JS there are 3 types of memory:
    - stack used for functions call,
    - queue — setTimeout.
    - heap for each of the objects,
      JS engine executes the function stack first. If the stack is empty, it pops the event from queue.
      If the event queue has another function call, it pushes it to stack and executes it again until it is empty.
      This is called event loop;

- Hoisting
  function definition moves to the top of block scope during JS compilation, then goes var ;
  // Hoisting is JavaScript's default behavior of moving declarations to the top.
  //In JavaScript, a variable can be declared after it has been used.
  //In other words; a variable can be used before it has been declared.
- Inheritance
  To inherit obj1 from obj2 , you can link an object to another object var obj1 = Object.create(obj2);
  JS uses prototype inheritance. Each object has a **proto** link. If we access any property of an object, the JS engine first checks if the object has it, if not — checks the prototype, and goes through **proto** chain to find the property name, and then throws undefined if didn’t find;

- Factory — a class that can create one or many different objects (useful if you want to generate different mock data in Unit Tests)
- Singleton — class which you can call the method directly, without creating an object;

- MVC, MVVM — Model View Controller and Model View ViewModel.
  React is MVC
  state — Model;
  JSX — View;
  actions (violate — can be mixed with a view) — Controller ;
  Angular is MVVM
  component — ModelView
  template — View (violate — not reusable)
  properties — Model

- Server vs Client-Side Rendering
  SSR — Use SSR if a site is stable, static, SEO focused, can pay for additional servers;
  pros
  Faster page load (viewable, but not interactable);
  Better for search engines (faster indexing);
  Better with sites that have a lot of static content (blogs);
  cons
  More server requests;
  Slower render to interact;
  Full page reloads;

  CSR — Use CSR if site under development, dynamic;
  pros
  Faster render after initial load;
  Best for web app;
  cons
  The initial load can require more time

evelt loop prder => sync => promise => system async

/_
ES2015 =>
classes,
modules,
templating,
for/of loops,
generator expressions,
arrow functions,
collections,
promises._/
\*/

//ES6 Destructing
const fullName = ["John", "Smith"];
const [firstName, lastName] = fullName;

console.log(firstName, lastName); // John Smith

//You can also use Destructuring on objects using a similar syntax
const fullName = { first: "John", last: "Smith" };
const { first, last } = fullName;

console.log(first, last); // John Smith

// for of loops
for (const fruit of fruits.entries()) {
console.log(fruit);
}

for (const [index, fruit] of fruits.entries()) {
console.log(index, fruit);
}

const str = 'This is repeated';
str.repeat(3); //"This is repeatedThis is repeatedThis is repeated"

city.endsWith('hi');//true
str.startsWith('Ra') //true

const cities = [
{ name: 'Delhi', year: 2010 },
{ name: 'Mumbai', year: 2015 },
{ name: 'Kolkata', year: 2017 }];

const markup = `

<ul>
${cities.map(city => `<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')}
</ul>`;

## The HEAD Method

- HEAD is almost identical to GET, but without the response body.

## What Is REST?

- REST determines how the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API.

# What is JSON?

- JSON: JavaScript Object Notation.
- JSON is a syntax for storing and exchanging data.
- JSON is text, written with JavaScript object notation.s

## Exchanging Data

- When exchanging data between a browser and a server, the data can only be text.

# Promises

### Terminolgy:

- **fulfilled** _The action relating to the promise succeeded_
- **rejected** _The action is relating to the promise failed_
- **pending** _Hasnt fulfilled or rejected_
- **settled** _Has fulfilled or rejected_

Sum of array => const arrSum = arr => arr.reduce((a,b) => a + b, 0)
Sort array =>

- array of strings => arr.sort() arr.reverse()
- array of nums =>
- arr.sort((a, b) => a-b)
- arr.sort((a, b) => a.length - b.length) //based on length
- arr.sort((a, b) => a[0] - b[0]) //based on length

Create array with fixed length => Array(n)
Fill in the array with one element => array.fill(n)
Convert int to string => num.toString()
Format decimal numbers => num.toFixed(6)

setInterval =>
to stop setInterval => clearInterval()

typeof([]) => object Array.isArray([]) => true

Fibonacci number => 0,1, 1, 2, 3, 5, 8, 13, 21,

Tight coupling => when by changing something you may impact other codes.

Var promises = urls.map(url => fetch(url))
For await (let promise of promises){
Var data = await promise.json()
}

Finally => works and get called regardless then or catch
Promise.all(urls.map(url => {
Return fetch(url).then(res => res.json())
}))
.then(results => console.log(results))
.catch()
.finally(bb => hhhh)

Splice =>
Works only on arrays, and modifies the original array
arr.splice(2) => remove from 2 to the end from the array
arr.splice(2, 4) => remove from 2 and 4 elements from the array
arr.splice(1, 0, ‘hi’) => after 1 removes 0 and put ‘hi’
arr.splice(1, 2, ‘hi’) => after 1 removes 2 (including 1)and put ‘hi’
Slice =>
Works on string and array, and doesn’t modify the original array
arr.slice(2) => from 2 to the end
arr.slice(2, 4) => from 2 to before 4
Substring =>
Works on strings

arr.shift() => removes the first element
arr.unshift(x) => adds x at the beginning of the array

loop over object’s keys => for (x in object)
"SoloLearn".startsWith("Solo", 0); // true
"SoloLearn".endsWith("Solo", 4); // true
"SoloLearn".includes("loLe"); // true
"SoloLearn".includes("olo", 1); // true
"SoloLearn".includes("olo", 2); // false

Check if key is in object => if (x in object)
Check if el is in array => if (el in array)
"foo".repeat(3) // foofoofoo

Match and regex =>

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

arr.split(/[ !?',;.]/)

Map =>
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
Set =>
new Set(<array>) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

Var x = str.replace("Microsoft", "W3Schools"); // replace first occurrence of Microsoft without changing the str

Object.assign()=>
let newStudent = Object.assign({}, person, student, ...);

“Use strict” =>
‘Use strict’ is limited to the scope that it’s defined.
with strict mode, you can not, for example, use undeclared variables. Because when you assign a value to an undeclared variable it automatically creates a global variable.
Increase security by not letting creating a new variable by mistyping.
Adding this limits accessing the “this” keyword.

Shallow vs deep copy =>
Shallow => when we assign two variables
Deep => like using spread operation. Deep copy will disconnect the copied variable from what they were originally linked to

modules=>
When you separate your code and share them (import, export) in your app. Before ES6 there were some libraries which made this possible (e.g., RequireJS, CommonJS). ES6 is now supporting this feature natively. Also packages that you import or require can be considered modules.

Before => commonJs
Module.exports = {x, y} //require

Now =>
Export function , export var,

Export default => when you export only one thing from your file

Browserify => it reads the file bundles all the dependencies and required modules and spit out one js file with everything in it

Event listener => click- change-keydown, mouseover, mouseout.
<input onclick onkeydown ….>
element.onClick = ….
Element.addEventListener(event, function) =>
RemoveEventListener(event, func)

AJAX =>
Asynchronous JavaScript And XML.
The point is to send requests and get responses asynchronously.
It uses the browser xmlHTTPRequest, javascript and DOM to display data.

Browser => create xmlHTTPRequest => sent it to server => server calculates and send the result back => browser process the result.

Json =>
javascript object notation - It’s an object to store data and usually is used to transfer data from server to client. Alternative for xml
JSON.parse(json) => to object
JSON.stringify(object) => to json

Xml =>xhtml
A markup language, like html but to transfer data.

Pattern of problems =>
Frequency => make an object and populate it to compare
Multiple pointer => when we are looking for a pair that results in a value- so we set two pointers (in sorted array can be first and last)and compare them and move the pointers if requirement didn’t meet. - Pair comparison matters
Sliding window => when in an array or string we are looking for some sort of sequence. find the sum of first sub array and after that just plus next number and minus previous number in array (slide window) - sequence comparison matters
Divide and conquer => array or string - we divide the data to smaller chunk (binary search)
Backtracking => recursive- creating a different combination of something like parentheses pairs

Functional programming =>
When it’s not OOP, it’s functional. It’s focusing on pure functions => the same input always returns the same output and has no side effect (when a function modifies things outside of itself like pop an array in a function).

Instance method =>
Methods that can be called on an instance
Class method =>
Static keyword => you can’t call it on class instances. It’s like a utility function that is used inside the function. You should call it on class => Class.register()

Polymorphism =>
ability to call the same method on different objects and get different results. Like overriding (different classes) methods. (we can call super to have parents functionality in method and add extra functionality.)

Scope => determines the accessibility of a variable.

Function scope =>
Javascript has function scope which is When we create a function {}. But other curly braces are not respecting block scope. So if you have a var in an if statement you can access it outside if statement.
Block scope => when we use let and const inside {} we can’t access it from outside. It’s block scope
Lexical => where we define a function or variables which determines what we can access. Creates a new separate universe (This keyword is not lexically scoped so we need to bind it)
Dynamic => where functions or variables are called or used.

Callback =>
A function that you pass in another function and expect to get called after something.

Hoisting enables us to define a function and call it in lines before. It brings tha var and function declaration to the top of the file.
Hoisting only works for var and function declaration
For example if console.log a var before declaration it says it’s undefined and not it’s not defined.
Hoisting wont work for const and let because they are scope sensitive. And also not for function expression (which is when you put function in a var like arrow function)

memory heap =>
Garbage collection => javascript does it automatically. When you delete something from memory heap the space gets available for new use.
Memory heap => a storage that variables and functions get stored there.

Memory leak =>
Piece of memory that had been used before but for some reason the garbage collector has not emptied it and it caused the memory heap to get filled.
Too many global variables
event listeners
setInterval

Call stack =>
When we call a function from the memory heap it goes to call stack.
Call stack or execution stack is a stack data structure that contains active tasks. These tasks will remain until the job is done.

Single thread language =>
Like javascript that has only one call stack - like a person who can eat only by one hand. That’s why js is synchronous

API (Application programming Interface) =>
A bridge between different entities, for example between client and database (REST to handle CRUD). And should be able to respond to client’s requests

Web api and runtime=>
Api provided by web browser . Web api comes with browser - provided by js runtime (window)( Browser storage - fetch - setTimeout - … )
Web api stuff (like fetch, setTimeout,..) don’t go to the call stack they go to web api, and the call back goes to the call stack and performs in order. It won’t jump to the call stack and the call stack won’t wait for the result.
Event loop => a function that checks if call stack is empty
callback queue (web api callbacks)
job queue or microtask queue (js stuff like promises
Job queue has higher priority

Synchronous function => executes at the time
Asynchronous functions => return a promise that may resolve later. Works in the background.

Node.js =>
is an open-source, JavaScript run-time environment that executes JavaScript code. Has its own package ecosystem npm. Single thread, asynchronous. Support async jobs and

Host objects =>objects that browser provides =>window, document
Native objects => objects that Ecmascript provides => Math, Data, Object,

Primitive => boolean, integers, string, undefined, null, symbol(‘’)
The value directly saved in memory.
They are immutable. You can't change them, you remove them and assign a new value. (pass by value)
non-primitive => object(object, array(key is index), function) - mutable
Value is not saved in the memory directly. Value has reference to the memory.(pass by reference)it’s point to that space in memory

undefined is the default value when a variable gets created, there is a variable but nothing in it. Null is when the value is null.

Type coercion =>
1 == ‘1’ => true (it compares without considering the type - tries to convert one to another) (type coercion)
1 === ‘1’ => false (it compares if they are actually equal)
