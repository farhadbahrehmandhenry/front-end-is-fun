var container = document.querySelector('.container');
var percent = document.querySelector('.percent');
var content = document.querySelector('.content');

container.addEventListener('click', (e) => {
  var {x, width} = container.getBoundingClientRect();
  var {clientX} = e;

  content.style.width = `${clientX - x}px`;
  percent.innerText = `${Math.round(((clientX - x) * 100) / width)}%`;
});