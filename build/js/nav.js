var navBtn = document.querySelector('.nav__btn');
var nav = document.querySelector('.nav');

nav.classList.remove('nav--nojs');

navBtn.addEventListener('click', function() {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
});
