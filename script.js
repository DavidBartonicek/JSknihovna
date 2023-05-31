document.addEventListener('DOMContentLoaded', function() {
  const sliderImages = document.querySelectorAll('.slider img');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
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

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderImages.length - 1;
    }
    showSlide();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide();
});
