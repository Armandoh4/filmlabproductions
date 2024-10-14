let burgerIcon = document.querySelector(".burgerIcon");
let navbar = document.querySelector(".navbar");
let navbarMobile = document.querySelector(".navbarMobile");
let xBurger = document.querySelector(".x-burger");
let banner = document.querySelector(".banner");
let popup = document.querySelector(".popup");
let burgerIconPopup = document.querySelector(".burgerIconPopup");

// sidebar show
if (burgerIcon) {
    burgerIcon.addEventListener("click", function() {
        burgerIcon.style.display = "none";
        if (navbar) navbar.style.display = "flex";
        if (navbarMobile) navbarMobile.style.display = "none";
    });
}

// sidebar hide
if (xBurger) {
    xBurger.addEventListener("click", function() {
        if (navbar) navbar.style.display = "none";
        if (navbarMobile) navbarMobile.style.display = "flex";
        burgerIcon.style.display = "block";
    });
}

// Homepage background image alternations
if (document.getElementById('backgroundImage1')) {
    let backgroundImage1 = document.getElementById('backgroundImage1');
    let originalSrc = backgroundImage1.src;
    setInterval(function() {
        if (backgroundImage1.src == originalSrc) {
            backgroundImage1.style.animation = 'fadeOut 1s';
            setTimeout(function() {
                backgroundImage1.src = "../assets/images/posterkidnapped.png";
                backgroundImage1.style.animation = 'fadeIn 3s';
            }, 1000);
        } else {
            backgroundImage1.style.animation = 'fadeOut 1s';
            setTimeout(function() {
                backgroundImage1.src = originalSrc;
                backgroundImage1.style.animation = 'fadeIn 3s';
            }, 1000);
        }
    }, 4000);
}

// Banner under home image
if (banner) {
    banner.addEventListener('click', function() {
        if (popup) popup.style.display = 'block'; // Show the popup
    });
}

if (burgerIconPopup) {
    burgerIconPopup.addEventListener('click', function() {
        if (popup) popup.style.display = 'none'; // Hide the popup
    });
}

// Carousel
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("clicked");
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        if (slides) {
            const activeSlide = slides.querySelector("[data-active]");
            if (activeSlide) {
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                if (newIndex < 0) newIndex = slides.children.length - 1;
                if (newIndex >= slides.children.length) newIndex = 0;
                slides.children[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;
            }
        }
    });
});
