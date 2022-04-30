var stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    var index = Number(star.getAttribute('data-index'));

    stars.forEach(s => s.classList.remove('active'));
    stars.forEach((s, i) => i <= index && s.classList.add('active'));
  });
});
