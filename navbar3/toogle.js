const toogleBtn = document.querySelector('.navbar_toogle');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icon');

toogleBtn.addEventListener('click',() => {
    menu.classList. toggle('active');
    icons.classList. toggle('active');
});