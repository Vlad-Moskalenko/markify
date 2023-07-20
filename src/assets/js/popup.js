const refs = {
  closePopupBtn: document.querySelector('[data-popup-close]'),
  backdrop: document.querySelector('[data-popup]'),
  popup: document.querySelector('.popup'),
  popupContent: document.querySelector('.popup-content'),
  popupBtn: document.querySelector('.popup__btn'),
  popupTitle: document.querySelector('.popup__title'),
  popupSubtitle: document.querySelector('.popup__subtitle'),
};

export function togglePopup() {
  document.body.classList.toggle('scroll-hidden');
  refs.backdrop.classList.toggle('is-hidden');
  refs.popup.classList.toggle('is-hidden');
}

function handleKey(e) {
  if (e.code === 'Escape' && !refs.popup.classList.contains('is-hidden')) {
    togglePopup();
  }

  return;
}

function handleClose(e) {
  if (e.target !== e.currentTarget) return;
  togglePopup();
}

document.addEventListener('keydown', handleKey);
refs.backdrop.addEventListener('mousedown', handleClose);
refs.closePopupBtn.addEventListener('click', () => togglePopup());
refs.popupBtn.addEventListener('click', () => togglePopup());
