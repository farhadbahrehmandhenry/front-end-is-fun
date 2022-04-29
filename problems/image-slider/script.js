var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var image = document.querySelector('img');

var images = ['./images/one.jpg', './images/two.jpg', './images/three.jpg'];

window.addEventListener('DOMContentLoaded', () => {
  var index = 0;

  image.src = images[index];

  next.addEventListener('click', () => {
    if (index === images.length - 1) index = 0;
    else index++;
  
    image.src = images[index];
  });
  
  prev.addEventListener('click', () => {
    if (index === 0) index = images.length - 1;
    else index--;
  
    image.src = images[index];
  });
});
