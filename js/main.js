document.addEventListener('DOMContentLoaded', function() {
  const reviewsBtn = document.querySelector('.reviews-btn');
  const modalCloseBtn = document.querySelector('.btn-modal-close');
  const backdrop = document.querySelector('.backdrop');

  reviewsBtn.addEventListener('click', function() {
    backdrop.classList.add('is-open');
  });

  modalCloseBtn.addEventListener('click', function() {
    backdrop.classList.remove('is-open');
  });
});