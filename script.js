document.addEventListener('DOMContentLoaded', function() {
  const sliderImages = document.querySelectorAll('.slider img');
  let currentSlide = 0;

  function resetSlides() {
    sliderImages.forEach(function(image) {
      image.classList.remove('active');
    });
  }

  function showSlide() {
    resetSlides();
    sliderImages[currentSlide].classList.add('active');
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderImages.length) {
      currentSlide = 0;
    }
    showSlide();
  }

  setInterval(nextSlide, 3000);

  showSlide();
});
