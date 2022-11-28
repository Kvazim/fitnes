/* global Swiper */
/* eslint no-undef: "error" */
/* eslint no-unused-vars: ["error", { "vars": "local" }] */
/* global swiper */

const scrollSlider = (item) => {

};

const swiper = new Swiper('.trainer__wrapper', {
  direction: 'horizontal',
  loop: false,
  allowTouchMove: true,
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

scrollSlider(swiper);

// export { scrollSlider };
