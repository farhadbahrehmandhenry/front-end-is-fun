var addBtn = document.querySelector('.add-btn');
var input = document.querySelector('input');
var lists = document.querySelector('.lists');
var items =  document.querySelectorAll('li');

addBtn.addEventListener('click', () => {
  var value = input.value.trim();
  if (value) {
    var item = document.createElement('li');

    item.addEventListener('click', () => {
      console.log(item)
      lists.removeChild(item);
    });

    item.innerText = value;

    lists.appendChild(item);

    input.value = '';
  }
  else {
    alert('to do is empty!!')
  }
});
