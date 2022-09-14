import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import Swiper from 'swiper';
const gymVideo = document.querySelector('[data-video]');
const gymLink = document.querySelector('[data-link]');
const gymButton = document.querySelector('[data-button]');

const Buttons = document.querySelectorAll('.tabs__nav-button');
const Tabs = document.querySelectorAll('.tabs__content');
const coachesSlider = document.querySelector('.slider');
const buttonCoachesBack = document.querySelector('.coaches__button--back');
const buttonCoachesNext = document.querySelector('.coaches__button--forward');
const rewiewsSlider = document.querySelector('.rewiews__slider');
const buttonRewiewsBack = document.querySelector('.rewiews__button--back');
const buttonRewiewsNext = document.querySelector('.rewiews__button--forward');


// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

   // ---------------------------------
// eslint-disable-next-line no-undef,

const onClickPrevButton = (button, swiper) => {
  button.addEventListener('click', () => {
    swiper.slidePrev();
  });
};

const onClickNextButton = (button, swiper) => {
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
};

const coachesSwiper = new Swiper(coachesSlider, {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: buttonCoachesNext,
    prevEl: buttonCoachesBack,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
      simulateTouch: false,
    },
  },
});

onClickPrevButton(buttonCoachesBack, coachesSwiper);
onClickNextButton(buttonCoachesNext, coachesSwiper);
 // ---------------------------------

 const rewiewsSwiper = new Swiper(rewiewsSlider, {
      slidesPerView: 1,
      // spaceBetween: 0,
      // loop: true,
      // initialSlide: 0,
      // spaceBetween: 40,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      simulateTouch: false,
      navigation: {
        nextEl: buttonRewiewsNext,
        prevEl: buttonRewiewsBack,
      },
    });

    onClickPrevButton(buttonRewiewsBack, rewiewsSwiper);
    onClickNextButton(buttonRewiewsNext, rewiewsSwiper);
 // ---------------------------------

  if (gymButton) {
    gymButton.addEventListener('click', () => {
      createIFrame();
      gymLink.classList.add('video__link--hidden');
      gymButton.classList.add('video__button--hidden');
    });

    const createIFrame = () => {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', setURL());
      gymVideo.appendChild(iframe);
    };

    const setURL = () => {
      return 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';
    };

  }


  Buttons.forEach(function (item) {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('tabs__nav-button--active')) {
        Buttons.forEach(function (item) {
          item.classList.remove('tabs__nav-button--active');
        });

        Tabs.forEach(function (item) {
          item.classList.remove('tabs__content--active');
        });

        currentBtn.classList.add('tabs__nav-button--active');
        currentTab.classList.add('tabs__content--active');
      }

    });
  });

  // document.querySelector.(".tabs__nav-button").click();

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
