"use strict";

// Для десктопа скрытие большой фотки при скроллинге и появления маленькой в области навигации
if (window.innerWidth > 600) {
  function toggleImages() {
    if (bigImg.getBoundingClientRect().top - headerHeight < 0) {
      bigImg.classList.add('invisible');
      smallImg.classList.remove('invisible');
    } else {
      bigImg.classList.remove('invisible');
      smallImg.classList.add('invisible');
    }
  }
  /* Get photos */
  const imgs = document.querySelectorAll("[src*='avatar.png']");
  const smallImg = imgs[0];
  const bigImg = imgs[1];

  // get header height
  const headerHeight = +getComputedStyle(document.querySelector("header")).height.match(/^[0-9.]+/ig)[0];

  window.addEventListener('scroll', toggleImages);
}

