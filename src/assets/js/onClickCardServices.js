import { renderModalMarkup } from './renderModalMarkup';

const refs = {
  backdrop: document.querySelector('[data-modal]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalWindow: document.querySelector('.modal'),
  modalBtn: document.querySelector('.modal__button'),
  content: document.querySelector('.modal-content'),
  card1: document.getElementById('card1'),
  card2: document.getElementById('card2'),
  card3: document.getElementById('card3'),
  card4: document.getElementById('card4'),
};

export function toggleModal() {
  document.body.classList.toggle('scroll-hidden');
  refs.modal.classList.toggle('is-hidden');
  refs.modalWindow.classList.toggle('is-hidden');
}

function handleKey(e) {
  if (e.code === 'Escape' && !refs.modalWindow.classList.contains('is-hidden')) {
    toggleModal();

    refs.card1.classList.remove('clicked');
    refs.card2.classList.remove('clicked');
    refs.card3.classList.remove('clicked');
    refs.card4.classList.remove('clicked');
  }

  return;
}

function handleClose(e) {
  if (e.target !== e.currentTarget) return;

  refs.card1.classList.remove('clicked');
  refs.card2.classList.remove('clicked');
  refs.card3.classList.remove('clicked');
  refs.card4.classList.remove('clicked');

  toggleModal();
}

function onClickButtonCloseModal() {
  refs.card1.classList.remove('clicked');
  refs.card2.classList.remove('clicked');
  refs.card3.classList.remove('clicked');
  refs.card4.classList.remove('clicked');
  toggleModal();
}

refs.card1.addEventListener('click', () => {
  refs.card1.classList.add('clicked');
  refs.content.innerHTML = renderModalMarkup(1);
  setTimeout(toggleModal, 100);
});

refs.card2.addEventListener('click', () => {
  refs.card2.classList.add('clicked');
  refs.content.innerHTML = renderModalMarkup(2);
  setTimeout(toggleModal, 100);
});

refs.card3.addEventListener('click', () => {
  refs.card3.classList.add('clicked');
  refs.content.innerHTML = renderModalMarkup(3);
  setTimeout(toggleModal, 100);
});

refs.card4.addEventListener('click', () => {
  refs.card4.classList.add('clicked');
  refs.content.innerHTML = renderModalMarkup(4);
  setTimeout(toggleModal, 100);
});

document.addEventListener('keydown', handleKey);
refs.backdrop.addEventListener('mousedown', handleClose);
refs.closeModalBtn.addEventListener('click', onClickButtonCloseModal);
refs.modalBtn.addEventListener('click', onClickButtonCloseModal);
