 /** sidebar show */
 //* Start of my own unique code
 document.querySelector(".burgerIcon").addEventListener("click", function(){
    document.querySelector(".burgerIcon").style.display="none";
    document.querySelector(".navbar").style.display="flex"; /*seemingly this has no function, however when I remove it everything stops working. So here it stays*/
    document.querySelector(".navbarMobile").style.display="none";
  });
  
  /** sidebar hide */
  document.querySelector(".x-burger").addEventListener("click", function(){
    document.querySelector(".x-burger").style.display="hidden";
    document.querySelector(".navbar").style.display="none";
    document.querySelector(".navbarMobile").style.display="flex";
    document.querySelector(".burgerIcon").style.display="block";
  });
 //* End of my own unique code

  // Chat GPT edited code below (edited from carousel code taken from here https://www.youtube.com/watch?v=9HcxHDS2w1s):
const buttons = document.querySelectorAll("[data-carousel-button]");
// const autoScrollInterval = 5000; // Change this value to adjust the auto scroll interval (in milliseconds)

// Homepage background image alternations
var backgroundImage1 = document.getElementById('backgroundImage1');
backgroundImage1.classList.add('fade');
var originalSrc = backgroundImage1.src;

var backgroundImage1 = document.getElementById('backgroundImage1');
var originalSrc = backgroundImage1.src;

setInterval(function() {
    backgroundImage1.classList.remove('fadeIn');
    backgroundImage1.classList.add('fadeOut');
    backgroundImage1.style.opacity = 0; // Start fade out
    setTimeout(function() { // Wait for fade out to finish
        if (backgroundImage1.src == originalSrc) {
            backgroundImage1.src = "assets/images/posterkidnapped.png";
        } else {
            backgroundImage1.src = originalSrc;
        }
        backgroundImage1.classList.remove('fadeOut');
        backgroundImage1.classList.add('fadeIn');
        backgroundImage1.style.opacity = 1; // Start fade in
    }, 1000); // Wait for 1 second (the duration of the fade out effect)
}, 8000);



buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Auto scroll function
const autoScroll = () => {
  const nextButton = document.querySelector("[data-carousel-button='next']");
  nextButton.click();
}

// Set up auto scroll interval
setInterval(autoScroll, autoScrollInterval);
