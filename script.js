// variables

const header = document.getElementById("header");
const menuBars = document.getElementById("menu-bars");
const navbar = document.querySelector(".navbar");



// event listeners

window.addEventListener("scroll", navBackground );
menuBars.addEventListener("click", showNavbar);



// transparent header on scroll

let prevScrollpos = window.pageYOffset;

function navBackground() {

    // remove responsive navbar on scroll
    navbar.classList.remove("active");
    menuBars.classList.remove("fa-times");

    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    } else {
        header.style.backgroundColor = "#f7f7f7";
        header.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.1)";
    }
    prevScrollpos = currentScrollPos;
}


// responsive navbar

function showNavbar() {
    navbar.classList.toggle("active");
    menuBars.classList.toggle("fa-times");
}