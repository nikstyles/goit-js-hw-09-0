const btn = document.querySelector('#button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
