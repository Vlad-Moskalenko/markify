const backdrop = document.querySelector('[data-video-modal]');
const videoModal = document.querySelector('.video-modal');
const modal = document.querySelector('.video-content');
const reviewsList = document.querySelector('.reviews-list');
const closePopupBtn = document.querySelector('.video-close-btn');

reviewsList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    modal.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src=${e.target.dataset.video}
      title="#shorts"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
      web-share" allowfullscreen>
    </iframe>`;

    toggleModal();
    document.addEventListener.keydown;
  }
});

function toggleModal() {
  document.body.classList.toggle('scroll-hidden');
  backdrop.classList.toggle('is-hidden');
  videoModal.classList.toggle('is-hidden');

  if (backdrop.classList.contains('is-hidden')) {
    modal.innerHTML = '';
  }
}

function handleKey(e) {
  if (e.code === 'Escape' && !backdrop.classList.contains('is-hidden')) {
    toggleModal();
  }
}

function handleClose(e) {
  if (e.target !== e.currentTarget) return;
  toggleModal();
}

document.addEventListener('keydown', handleKey);
backdrop.addEventListener('mousedown', handleClose);
closePopupBtn.addEventListener('click', () => toggleModal());
