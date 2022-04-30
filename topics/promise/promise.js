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
