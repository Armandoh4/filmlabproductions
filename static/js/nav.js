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
        backgroundImage1.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de4759a3-bbf0-4006-ae60-bee32b804bd2/de4yudw-5a33000b-2bc7-4a43-9935-e88cd215c66a.jpg/v1/fit/w_828,h_466,q_70,strp/marvel_avengers_thumbnail_by_assassincreed88_de4yudw-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2RlNDc1OWEzLWJiZjAtNDAwNi1hZTYwLWJlZTMyYjgwNGJkMlwvZGU0eXVkdy01YTMzMDAwYi0yYmM3LTRhNDMtOTkzNS1lODhjZDIxNWM2NmEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tbLv71-59al0nYQC85at0MYZYvvuk7XHtsihnJMYCZ8";
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





//End of Home image

// BTS page
// carousel code taken from here https://www.youtube.com/watch?v=9HcxHDS2w1s):

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

// const autoscroll = () => {
//   const nextButton = document.querySelector("[data-carousel-button='next']");
//   nextButton.click();
// }


