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
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        // console.log(sectionId);
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

themeToggler.onclick = () => {
    themeToggler.classList.toggle('activeToggle');
    if (themeToggler.classList.contains('activeToggle')) {
        document.body.classList.add('activeDark');
        headDark.classList.add('ac');

    } else {
        document.body.classList.remove('activeDark');
        headDark.classList.remove('ac');

    }

}

const accept = localStorage.getItem('accepted');
const dark = localStorage.getItem('dark');

if (accept == 1) {
    // Adding Theme Mode Using local Storage
    themeColor.forEach(color => {
        color.onclick = () => {
            let background = color.style.background;
            switch (background) {
                case 'rgb(62, 111, 244)':
                    localStorage.setItem("theme", "1");
                    break;
                case 'rgb(0, 68, 253)':
                    localStorage.setItem("theme", "2");
                    break;
                case 'rgb(39, 174, 96)':
                    localStorage.setItem("theme", "3");
                    break;
                case 'rgb(0, 238, 99)':
                    localStorage.setItem("theme", "4");
                    break;

                case 'rgb(15, 185, 177)':
                    localStorage.setItem("theme", "5");
                    break;
                case 'rgb(0, 255, 242)':
                    localStorage.setItem("theme", "6");
                    break;
                case 'rgb(206, 178, 68)':
                    localStorage.setItem("theme", "7");
                    break;
                case 'rgb(255, 204, 0)':
                    localStorage.setItem("theme", "8");
                    break;

                case 'rgb(172, 53, 76)':
                    localStorage.setItem("theme", "9");
                    break;
                case 'rgb(255, 0, 51)':
                    localStorage.setItem("theme", "10");
                    break;
                case 'rgb(232, 67, 147)':
                    localStorage.setItem("theme", "11");
                    break;
                case 'rgb(186, 238, 0)':
                    localStorage.setItem("theme", "12");
                    break;
                case 'rgb(145, 75, 108)':
                    localStorage.setItem("theme", "13");
                    break;
                case 'rgb(252, 7, 239)':
                    localStorage.setItem("theme", "14");
                    break;
                default:
                    break;
            }
            console.log(background);
            document.querySelector(':root').style.setProperty('--first-color', background);
        }
    });
    const theme = localStorage.getItem('theme');

    switch (theme) {
        case "1":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(62, 111, 244)');
            break;
        case "2":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 68, 253)');
            break;
        case "3":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(39, 174, 96)');
            break;
        case "4":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 238, 99)');
            break;

        case "5":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(15, 185, 177)');
            break;
        case "6":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 255, 242)');
            break;
        case "7":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(206, 178, 68)');
            break;
        case "8":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(255, 204, 0))');
            break;
        case "9":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(172, 53, 76)');
            break;
        case "10":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(255, 0, 51)');
            break;
        case "11":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(232, 67, 147)');
            break;
        case "12":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(186, 238, 0)');
            break;

        case "13":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(145, 75, 108)');
            break;
        case "14":
            document.querySelector(':root').style.setProperty('--first-color', 'rgb(252, 7, 239)');
            break;
        default:
            break;
    }



    // Adding Dark Mode Using local Storage
    themeToggler.onclick = () => {
        themeToggler.classList.toggle('activeToggle');
        if (themeToggler.classList.contains('activeToggle')) {
            document.body.classList.add('activeDark');
            headDark.classList.add('ac');
            cookiee.classList.add('dark');
            localStorage.setItem("dark", "1");
        } else {
            document.body.classList.remove('activeDark');
            headDark.classList.remove('ac');
            cookiee.classList.remove('dark');
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






