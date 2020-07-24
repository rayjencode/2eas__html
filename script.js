const toggleNavBtn = document.querySelector('.nav__menu--Btn');
const navMenu = document.querySelector('.nav__menu');
const navMenuList = document.querySelector('.nav__menu__list');

toggleNavBtn.addEventListener('click', () => {
    navMenu.classList.add('show');
    // navMenuList.style.marginLeft = '0';
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});
