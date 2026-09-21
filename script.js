const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");


/* ================= OPEN MENU ================= */

function openMenu() {

    navMenu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");

    hamburger.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE MENU ================= */

function closeNavigation() {

    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";
}


/* ================= HAMBURGER CLICK ================= */

hamburger.addEventListener("click", () => {

    if (navMenu.classList.contains("active")) {
        closeNavigation();
    } else {
        openMenu();
    }

});


/* ================= CLOSE BUTTON ================= */

closeMenu.addEventListener("click", closeNavigation);


/* ================= OVERLAY CLICK ================= */

overlay.addEventListener("click", closeNavigation);


/* ================= NAV LINK CLICK ================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        closeNavigation();

    });

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeNavigation();
    }

});


/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= ACTIVE SECTION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});