const moreBtn = document.querySelector('.inforandnext .info .metadata .titleandbutton .moreBtn');
const title = document.querySelector('.inforandnext .info .metadata .titleandbutton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});