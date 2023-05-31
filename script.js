document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  const modalContainer = document.querySelector('.modal-container');
  const modalImg = document.querySelector('.modal-img');
  const modalClose = document.querySelector('.modal-close');
  const modalNext = document.querySelector('.modal-next');
  const modalPrev = document.querySelector('.modal-prev');
  let currentSlide = 0;

  function showSlide(index) {
    const images = gallery.querySelectorAll('img');
    modalImg.src = images[index].src;
    currentSlide = index;
  }

  function openModal() {
    modalContainer.classList.add('active');
  }

  function closeModal() {
    modalContainer.classList.remove('active');
  }

  function nextSlide() {
    currentSlide++;
    const images = gallery.querySelectorAll('img');
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    const images = gallery.querySelectorAll('img');
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
    showSlide(currentSlide);
  }

  gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      const index = Array.from(gallery.querySelectorAll('img')).indexOf(e.target);
      showSlide(index);
      openModal();
    }
  });

  modalClose.addEventListener('click', closeModal);
  modalNext.addEventListener('click', nextSlide);
  modalPrev.addEventListener('click', prevSlide);
});
