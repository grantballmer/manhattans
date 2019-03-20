const sideNav = document.querySelector('.side-nav');
const menuBars = document.querySelector('.nav-menu');
const exit = document.querySelector('.side-nav__exit');

menuBars.addEventListener('click', () => sideNav.classList.toggle("slide__side-nav"));
exit.addEventListener('click', () => sideNav.classList.toggle("slide__side-nav"));
