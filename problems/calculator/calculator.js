var container = document.querySelector('.container');
var amount = document.querySelector('#amount');
var tip = document.getElementById('tip');
var numberOfPeople = document.getElementById('group');
var button = document.getElementById('submit');

button.addEventListener('click', () => {
  var totalElement = document.createElement('div');
  var EachPersonElement = document.createElement('div');
  var total = +amount.value + (+amount.value * +tip.value) / 100;
  var eachPerson = total / +numberOfPeople.value;

  totalElement.innerText = total;
  EachPersonElement.innerText = eachPerson;

  container.appendChild(totalElement);
  container.appendChild(EachPersonElement);
});
