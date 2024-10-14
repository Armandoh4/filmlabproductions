 /* sidebar show */
 // Start of my own unique code

// let burgerMenue = document.getElementsByName(burger.svg);
// let menue = document.getElementsByName(burger2.svg);

 document.querySelector(".burgerIcon").addEventListener("click", function(){
  document.querySelector(".burgerIcon").style.display="none";
  document.querySelector(".navbar").style.display="flex";
  document.querySelector(".navbarMobile").style.display="none";
});
/* sidebar hide */
document.querySelector(".x-burger").addEventListener("click", function(){
  document.querySelector(".navbar").style.display="none";
  document.querySelector(".navbarMobile").style.display="flex";
  document.querySelector(".burgerIcon").style.display="block";
});

// Homepage background image alternations
if (document.getElementById('backgroundImage1')){
  let backgroundImage1 = document.getElementById('backgroundImage1');
  let originalSrc = backgroundImage1.src;
  setInterval(function() {
    if (backgroundImage1.src == originalSrc) {
          backgroundImage1.style.animation = 'fadeOut 1s';
          setTimeout(function() {
              backgroundImage1.src = "../assets/images/posterkidnapped.png";
              backgroundImage1.style.animation = 'fadeIn 3s';
        }, 1000);
    }
    else {
        backgroundImage1.style.animation = 'fadeOut 1s';
        setTimeout(function() {
            backgroundImage1.src = originalSrc;
            backgroundImage1.style.animation = 'fadeIn 3s';
        }, 1000);
    }
  },4000);
}

// Banner under home image
const banner = document.querySelector('.banner');
const popup = document.querySelector('.popup');
const burgerIconPopup = document.querySelector('.burgerIconPopup');

// Add a click event listener to the .banner element
banner.addEventListener('click', function() {
  popup.style.display = 'block'; // Show the popup
});
// Add a click event listener to the .close_button element
burgerIconPopup.addEventListener('click', function() {
  popup.style.display = 'none'; // Hide the popup
});

// Add a keydown event listener to the document
// document.addEventListener('keydown', function() {
//   if (e.keyCode === 27) { // ESC key
//     popup.style.display = 'none'; // Hide the popup
//   }
// });




//End of Home image

// BTS page
// carousel code taken from here https://www.youtube.com/watch?v=9HcxHDS2w1s):

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
button.addEventListener("click", () => {
  console.log("clicked");
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

// const autoscroll = () => {
//   const nextButton = document.querySelector("[data-carousel-button='next']");
//   nextButton.click();
// }


