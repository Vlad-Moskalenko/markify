import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],

  freeMode: true,
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  slideToClickedSlide: true,
  watchOverflow: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    968: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      slidesPerGroup: 3,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 32,
      slidesPerGroup: 4,
    },
  },
});
