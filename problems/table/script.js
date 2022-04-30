var contaier = document.querySelector('.container');
var users = [
  {name: 'farhad', email: 'farhad@TextDecoderStream', phone: '123455'},
  {name: 'somayeh', email: 'farhad@TextDecoderStream', phone: '123455'},
  {name: 'parvaneh', email: 'farhad@TextDecoderStream', phone: '123455'},
  {name: 'parisa', email: 'farhad@TextDecoderStream', phone: '123455', age: 40}
];

var fields = Object.keys(users.find(user => Object.keys(user).length === Math.max(...users.map(user => Object.keys(user).length))));
var table = document.createElement('table');
var tableHeader = document.createElement('tr');

fields.forEach(field => {
  var tableHeaderField = document.createElement('th');

  tableHeaderField.innerText = field;
  tableHeader.appendChild(tableHeaderField);
});

table.appendChild(tableHeader);

users.forEach(user => {
  var tableRow = document.createElement('tr');
  var userFields = Object.values(user);

  fields.forEach((field, i) => {
    var tableField = document.createElement('td');
    tableField.innerText = userFields[i] ? userFields[i] : '';

    tableRow.appendChild(tableField);
  });

  table.appendChild(tableRow);
});

contaier.appendChild(table)