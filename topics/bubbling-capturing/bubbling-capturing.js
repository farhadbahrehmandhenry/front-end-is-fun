var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');

first.addEventListener('click', () => {
  alert(first.className)
}, true); // default is false => bubbling

second.addEventListener('click', () => {
  alert(second.className)
}, true); // default is false => bubbling

third.addEventListener('click', () => {
  alert(third.className)
}, true); // default is false => bubbling