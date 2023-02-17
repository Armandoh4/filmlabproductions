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