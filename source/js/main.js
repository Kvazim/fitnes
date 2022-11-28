import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { createVideo } from './modules/video/video';
import { twistUp } from './modules/smooth-scroll/smooth-scroll';
import { changeTabs } from './modules/tabs/tabs';
import './modules/slide/slide';

const DATA = {
  DATA_CONTAINER: '[data-video]',
  VIDEO_URL: 'https://www.youtube.com/embed/9TZXsZItgdw',
  SCROLL_ATRR: '[data-scroll]',
  DATA_TABS: '[data-tabs]',
  TABS_CLASS: 'tabs__link',
  DATA_TABS_LINK: '[data-tabs-link]',
  DATA_TABS_CONTENT: '[data-tabs-content]',
  ACTIVE: 'is-active',
  OPEN: 'is-open',
};

//

const { DATA_CONTAINER, VIDEO_URL, SCROLL_ATRR, DATA_TABS, TABS_CLASS, DATA_TABS_LINK, DATA_TABS_CONTENT, ACTIVE, OPEN } = DATA;

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  twistUp(SCROLL_ATRR);
  createVideo(DATA_CONTAINER, VIDEO_URL);
  changeTabs(DATA_TABS, DATA_TABS_LINK, TABS_CLASS, DATA_TABS_CONTENT, ACTIVE, OPEN);

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
