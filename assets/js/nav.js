 /* sidebar show */
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

// Homepage background image alternations
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
let backgroundImage1 = document.getElementById('backgroundImage1');
originalSrc = backgroundImage1.src;
//End of Home image

// BTS page
const buttons = document.querySelectorAll("[data-carousel-button]");
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