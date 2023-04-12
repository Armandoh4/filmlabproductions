 /** sidebar show */
 
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


  // Chat GPT edited code below
const buttons = document.querySelectorAll("[data-carousel-button]");
const autoScrollInterval = 5000; // Change this value to adjust the auto scroll interval (in milliseconds)

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
