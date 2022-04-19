const toggleBtn = document.querySelector('.toogle');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icon');

toggleBtn.addEventListener('click',() => {
    menu.classList. toggle('active');
    icons.classList. toggle('active');
});