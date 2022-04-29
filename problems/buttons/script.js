var mainButton = document.querySelector('.button');
var {body} = document;

var handleClick = (el) => {
  var clickCounts = el.querySelector('.click-count');
  clickCounts.innerText = +clickCounts.innerText + 1;
  createButton();
}

var createButton = () => {
  var button = document.createElement('button');

  button.className = 'button';
  button.innerHTML = '<span class="click-count">0</span> clicked'

  button.addEventListener('click', () => {
    handleClick(button);
  });

  body.appendChild(button);
}

mainButton.addEventListener('click', () => {
  handleClick(mainButton);
});
