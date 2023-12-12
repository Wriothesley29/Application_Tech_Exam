//Burger Button making

const burgerButton = document.getElementById("navbarButton");
const toggleMenu = document.getElementById("toggleMenu");

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("open");
    toggleMenu.classList.toggle("open");
})

// Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = '#2b2b2b';
        navbar.style.boxShadow = '3px 0 15px #000';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});