// new Date()
// var date = Date.now()
// date.getHours()
// date.getMinutes()
// date.getSeconds()

var clock = document.querySelector('.clock');

window.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    clock.innerText = `${hour}:${minutes}:${seconds}`;
  }, 1000);
});


