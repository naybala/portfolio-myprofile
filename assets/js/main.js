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
const themeColor = document.querySelectorAll('.theme-colors .color');

themeColor.forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--first-color', background);
    }
});

// Adding Dark Mode
let themeToggler = document.querySelector('.theme-toggler');
let headDark = document.querySelector('#head');
let cookiee = document.querySelector('#cookiee');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('activeToggle');
    if (themeToggler.classList.contains('activeToggle')) {
        document.body.classList.add('activeDark');
        headDark.classList.add('ac');
        cookiee.classList.add('dark');
    } else {
        document.body.classList.remove('activeDark');
        headDark.classList.remove('ac');
        cookiee.classList.remove('dark');
    }

}

const accept = localStorage.getItem('accepted');
const dark = localStorage.getItem('dark')
if (accept == 1) {
    themeToggler.onclick = () => {
        themeToggler.classList.toggle('activeToggle');
        if (themeToggler.classList.contains('activeToggle')) {
            document.body.classList.add('activeDark');
            headDark.classList.add('ac');
            cookiee.classList.add('dark');
            localStorage.removeItem('dark', '0')
            localStorage.setItem("dark", "1");
        } else {
            document.body.classList.remove('activeDark');
            headDark.classList.remove('ac');
            cookiee.classList.remove('dark');
            localStorage.removeItem('dark', '1')
            localStorage.setItem("dark", "0");
        }

    }



    if (dark == 1) {
        themeToggler.classList.toggle('activeToggle');
        document.body.classList.add('activeDark');
        headDark.classList.add('ac');
        cookiee.classList.add('dark');
    } else {
        document.body.classList.remove('activeDark');
        headDark.classList.remove('ac');
        cookiee.classList.remove('dark');
    }
}






