const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navLinks.style.display = 'flex';
    navLinks.style.top = '0';
}

function close() {
    navLinks.style.top = '-100%';
}