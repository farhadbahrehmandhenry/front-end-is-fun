window.addEventListener('DOMContentLoaded', () => {

  var myFunction = (el, n) => {
    console.log('dddd')
    var names = ['one', 'two', 'three', 'four', 'five'];
    var length = n;
    var div = document.createElement('div');
    div.className = 'first';
    div.innerText = names[0];
  
    el.appendChild(div);
  
    for (var i = 1; i <= length; i++) {
      var child = document.createElement('div');
      child.className = 'first';
      child.innerText = names[i];

      myFunction(child, length -1)

      div.appendChild(child);
  
      div = child
    }
  }
  var names = ['one', 'two', 'three', 'four', 'five'];
  var length = 4;
  var div = document.createElement('div');
  div.className = 'first';
  div.innerText = names[0];

  document.body.appendChild(div);


  for (var i = 1; i <= length; i++) {
    var child = document.createElement('div');
    child.className = 'first';
    child.innerText = names[i];
    div.appendChild(child);
    myFunction(div, length)

    div = child
  }
});
