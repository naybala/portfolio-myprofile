/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//Changing Bg Color Profile
document.querySelectorAll('.theme-colors .color').forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--first-color', background);
    }
});




let themeChanger = document.querySelector('.theme-changer');
let bgContainer = document.querySelector('.bg-container');
themeChanger.onclick = () => {

    themeChanger.classList.toggle('active');

    if (themeChanger.classList.contains('active')) {
        bgContainer.classList.add('activeBg');

    } else {
        bgContainer.classList.remove('activeBg');
    }
}


// Adding Dark Mode
let themeToggler = document.querySelector('.theme-toggler');
let headDark = document.querySelector('#head');
// const nav = document.getElementById("#nav__menu");
// console.log(nav);
themeToggler.onclick = () => {
    themeToggler.classList.toggle('active');
    if (themeToggler.classList.contains('active')) {
        document.body.classList.add('active');
        headDark.classList.add('ac');
    } else {
        document.body.classList.remove('active');
        headDark.classList.remove('ac');
    }

}


