let theme = document.querySelector('.themes-container');
let themeOpen = document.querySelector('#theme-open');

themeOpen.onclick = () => {
    console.log("open");
    theme.classList.add('activeMenu');
    themeOpen.style.opacity = '0';
}

document.querySelector('#theme-close').onclick = () => {
    console.log("close");
    theme.classList.remove('activeMenu');
    themeOpen.style.opacity = '1';
}