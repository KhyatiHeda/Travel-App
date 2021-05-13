var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bottom-left-pics");
 
  if (n > slides.length ) {slideIndex = 1}    
  if (n < 1) {
    slideIndex = slides.length
    
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}

var slideIndex=1;
showrightSlides(slideIndex);

function plusSlides(n) {
  showrightSlides(slideIndex += n);
}

function currentSlide(n) {
  showrightSlides(slideIndex = n);
}

function showrightSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bottom-right-pics");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}
