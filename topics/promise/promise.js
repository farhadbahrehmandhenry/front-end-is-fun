
// Es2020 => allSettled vs all => in all it waits until all resolves and if there is something wrong it won’t return anything, but allSettled returns them no matter if there is an error

// Handling Async jobs=>
// Parallel(all at the same time), sequential(one after each), race(run them and get the first one that comes back and ignore the rest)

// Parallel => const [output1, output2, output3] = await Promise.all(promises);
// Race => const output1 = await Promise.race(promises);
// Sequential => const output1 = await promise1, const output2 = await promise2

const fetch = require("node-fetch");

// one 
var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise resolved'), 2000);
});

promise
.then(data => console.log(data))
.catch(error => console.log(error));

// two
var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise1 resolved'), 3000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise2 resolved'), 2000);
});

Promise.all([promise1, promise2]).then(results => console.log(results));

// three
var three = async() => {

  var urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
  ];

  try {
    var [user1, user2, user3] = await Promise.all(urls.map(url => fetch(url).then(user => user.json())));

    console.log(user1, user2, user3);
  }
  catch {
    console.log('error')
  }
}

three()

// four
var four = async() => {
  try {
    var data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    var user = await data.json();
    console.log(user);
  }
  catch {
    console.log('error')
  }
}

four()

// five 
var asyncJob = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('async job'), 5000)
  });
}

var callAsyncJob = async() => {
  var result = await asyncJob();

  console.log(result);
}

console.log(callAsyncJob())



/////////////
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
