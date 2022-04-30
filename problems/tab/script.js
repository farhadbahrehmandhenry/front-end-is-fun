var contentOne = document.querySelector('.content.one');
var contentTwo = document.querySelector('.content.two');
var contentThree = document.querySelector('.content.three');
var tabOne = document.querySelector('.tab.one');
var tabTwo = document.querySelector('.tab.two');
var tabThree = document.querySelector('.tab.three');
var contents = document.querySelectorAll('.content');
var tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    if (tab.classList.contains('one')) {
      contentOne.classList.add('active');
      tabOne.classList.add('active');
    }

    if (tab.classList.contains('two')) {
      contentTwo.classList.add('active');
      tabTwo.classList.add('active');
    }

    if (tab.classList.contains('three')) {
      contentThree.classList.add('active');
      tabThree.classList.add('active');
    }
  });
});
