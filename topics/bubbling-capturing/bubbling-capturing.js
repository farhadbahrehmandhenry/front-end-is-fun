var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');

// when one element is nested inside a second element, and both elements have registered a listener 
// for the same event (a click, for example). With bubbling, the event is first captured and 
// handled by the innermost element and then propagated to outer elements.
first.addEventListener('click', () => {
  alert(first.className)
}, false); // default is false => bubbling

second.addEventListener('click', () => {
  alert(second.className)
}, false); // default is false => bubbling

third.addEventListener('click', () => {
  alert(third.className)
}, false); // default is false => bubbling