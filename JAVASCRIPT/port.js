const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const darkCheck = document.getElementById("darkMode");
const navbg = document.querySelector(".nav-bg");
const navLinks = document.querySelector(".nav-links");
const darkSlider = document.querySelector(".check");
const navWrapper = document.querySelector(".nav-wrapper");
const heroTitle = document.querySelector(".hero-titles");
const faders = document.querySelectorAll(".fade-in");

let titleCall = 0;



const changeFavicon = () => {
    if (isDark.matches) {
        faviconTag.href = "/ASSETS/IMAGES/faviconDark.png";
    } else {
        faviconTag.href = "/ASSETS/IMAGES/faviconLight.png";
    }
}
changeFavicon();
isDark.addEventListener("change", changeFavicon);



if (sessionStorage.getItem("mode") == "dark") {
    darkmode();
} else {
    lightmode();
}

darkCheck.addEventListener("change", () => {
    if (darkCheck.checked) {
        darkmode();
    } else {
        lightmode();
    }
})

function darkmode() {
    document.body.classList.add("dark");
    darkCheck.checked = true;
    sessionStorage.setItem("mode", "dark");
}

function lightmode() {
    document.body.classList.remove("dark");
    darkCheck.checked = false;
    sessionStorage.setItem("mode", "light");
}

function borgir(menu) {
    if (navLinks.getAttribute("data-visible") == "false") {
        borgirOpen(menu);
    } else {
        borgirClose(menu);
    }
}

function borgirOpen(menu) {
    menu.classList.add("change");
    navLinks.setAttribute("data-visible", true);
    menu.setAttribute("aria-expanded", true);
    navWrapper.setAttribute("bg-expanded", true);
    darkSlider.setAttribute("borgir-mode", true);
}

function borgirClose(menu) {
    menu.classList.remove("change");
    navLinks.setAttribute("data-visible", false);
    menu.setAttribute("aria-expanded", false);
    navWrapper.setAttribute("bg-expanded", false);
    darkSlider.setAttribute("borgir-mode", false);
}

function linkClose() {
    const menu = document.querySelector(".borgir");
    borgirClose(menu);
}

function titles() {
    heroTitle.classList.remove("pulse-animation");
    heroTitle.classList.add("pulse-animation");
    switch (titleCall) {
        case 0:
            heroTitle.innerHTML = "Aspiring Software Developer";
            titleCall++;
            break;
        case 1:
            heroTitle.innerHTML = "Music Producer";
            titleCall++;
            break;
        case 2:
            heroTitle.innerHTML = "Aspiring Game Developer";
            titleCall++;
            break;
        case 3:
            heroTitle.innerHTML = "Gamer";
            titleCall++;
            break;
        case 4:
            heroTitle.innerHTML = "Keyboard Enthusiast";
            titleCall++;
            break;
        default:
            heroTitle.innerHTML = "Graphic Designer";
            titleCall = 0;
            break;
    }
}

titles();
setInterval(titles, 5000);

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
