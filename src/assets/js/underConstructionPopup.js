import { togglePopup } from './popup';
import { renderPopupMarkup } from './renderPopupMarkup';

const refs = {
  popupContent: document.querySelector('.popup-content'),
  socialMedia: document.querySelector('[data-social-media]'),
  popupTitle: document.querySelector('.popup__title'),
  popupSubtitle: document.querySelector('.popup__subtitle'),
  popupBtn: document.querySelector('.popup__btn'),
  popupContent: document.querySelector('.popup-content'),
};

refs.socialMedia.addEventListener('click', e => {
  if (e.target.tagName !== 'UL') {
    refs.popupContent.innerHTML = renderPopupMarkup('underConstruction');
    refs.popupBtn.textContent = 'Back to Home Page';
    togglePopup();
  }
});
