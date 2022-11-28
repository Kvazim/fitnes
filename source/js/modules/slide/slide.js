/* global swiper, Swiper */
/* eslint no-undef: "error" */

const scrollSlider = () => {

  const swiper = new Swiper('.trainer__wrapper', {
    direction: 'horizontal',
    loop: true,
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
      nextEl: '.trainer__button--prev',
      prevEl: '.trainer__button--next',
    },
  });
};

export { scrollSlider };
