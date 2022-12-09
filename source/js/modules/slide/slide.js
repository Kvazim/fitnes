/* global Swiper */
/* eslint no-undef: "error" */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }] */

const swiperIgnored = new Swiper('.trainer__wrapper', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.trainer__button--next',
    prevEl: '.trainer__button--prev',
  },
});

const reviewsIgnored = new Swiper('.reviews__wrapper', {
  direction: 'horizontal',
  loop: false,
  allowTouchMove: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});
