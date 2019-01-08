(function () {
  /* конфигурация */
  var width = 34.5; // ширина слайда (ширина карточки 30.9 + margin-right 3.6)
  var count = 3 // количество слайдов для сдвига

  var carousel = document.getElementById('carousel');
  var list = carousel.querySelector('.carousel ul');
  var listElems = carousel.querySelectorAll('.carousel li');

  var position = 0; // текущий сдвиг влево

  carousel.querySelector('.carousel__btn--left').onclick = function () {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'rem';
  };

  carousel.querySelector('.carousel__btn--right').onclick = function () {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'rem';
  };

  function changeParametres() {
    var screen = window.innerWidth;
    if (screen < 800) {
      position = 0;
      count = 1;
      // сдвинуть весь ul таким образом, чтобы карточка оказалась по центру
      var cardWidth = parseInt(getComputedStyle(document.querySelector('.card')).width);
      list.style.transform = 'translateX(' + (screen - cardWidth)/2 + 'px)';
    } else {
      count = 3;
    }
  }

  window.addEventListener('resize', changeParametres);
  document.addEventListener('DOMContentLoaded', changeParametres);
})();