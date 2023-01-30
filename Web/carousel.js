var slides = document.getElementsByClassName("carouselSlide");
var slideIndex = 0;

showSlides();
setInterval(showSlides, 5000);

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";  
  slideIndex++;
}
