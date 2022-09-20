import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import Swiper from 'swiper';
const gymVideo = document.querySelector('[data-video]');
const gymContainer = document.querySelector('[data-container]');
const gymButton = document.querySelector('[data-button]');
const tabSection = document.querySelector('[data-tabs]');
const tabButtons = tabSection.querySelectorAll('[data-tab]');
const tabCards = tabSection.querySelectorAll('[data-card]');
const coachesSection = document.querySelector('[data-coaches]');
const coachesSlider = coachesSection.querySelector('[data-slider]');
const buttonCoachesBack = coachesSection.querySelector('[data-back]');
const buttonCoachesNext = coachesSection.querySelector('[data-next]');
const rewiewsSection = document.querySelector('[data-rewiews]');
const rewiewsSlider = rewiewsSection.querySelector('[data-slider]');
const buttonRewiewsBack = rewiewsSection.querySelector('[data-back]');
const buttonRewiewsNext = rewiewsSection.querySelector('[data-next]');

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  // ---------------------------------
  // eslint-disable-next-line no-undef,

  function onClickPrevButton(button, swiper) {
    button.addEventListener('click', () => {
      swiper.slidePrev();
    });
  }

  function onClickNextButton(button, swiper) {
    button.addEventListener('click', () => {
      swiper.slideNext();
    });
  }

  if (coachesSlider) {
    const coachesSwiper = new Swiper(coachesSlider, {
      loop: true,
      autoheight: true,
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
          spaceBetween: -5,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: -24,
          initialSlide: 0,
          simulateTouch: false,
        },
      },
    });

    onClickPrevButton(buttonCoachesBack, coachesSwiper);
    onClickNextButton(buttonCoachesNext, coachesSwiper);
  }
  // ------------Карусель---------------------

  if (rewiewsSlider) {
    const rewiewsSwiper = new Swiper(rewiewsSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      autoheight: true,
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
  }
  // ---------------------------------

  if (gymButton) {
    gymButton.addEventListener('click', () => {
      createIFrame();
      gymContainer.classList.add('video__container--hidden');
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


  if (tabButtons && tabCards) {
    tabButtons.forEach(function (item) {
      item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tabs__nav-button--active')) {
          tabButtons.forEach(function (button) {
            button.classList.remove('tabs__nav-button--active');
          });

          tabCards.forEach(function (card) {
            card.classList.remove('tabs__content--active');
          });

          currentBtn.classList.add('tabs__nav-button--active');
          currentTab.classList.add('tabs__content--active');
        }
      });
    });
  }

  // -------------------------------

  function mask(evt) {
    const matrix = '+7 (___) ___-__-__';
    let m = 0;
    const def = matrix.replace(/\D/g, '');
    let val = input.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    input.value = matrix.replace(/./g, function (a) {

      if (/[_\d]/.test(a) && m < val.length) {
        return val.charAt(m++);
      } else if (m >= val.length) {
        return '';
      } else {
        return a;
      }
    });
    if (evt.type === 'blur') {
      if (input.value.length === 2) {
        input.value = '';
      }
    } else {
      setCursorPosition (input.value.length, input);
    }
  }
  const input = document.querySelector('[name="phone"]');
  if (input) {
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
  }

});


// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  initModals();
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
