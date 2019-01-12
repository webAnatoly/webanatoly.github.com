(function () {
  /* конфигурация */
  var width = 34.5; // ширина слайда (ширина карточки 30.9 + margin-right 3.6)
  var count = 3 // количество слайдов для сдвига для десктоп версии

  var carousel = document.getElementById('carousel');
  var list = carousel.querySelector('.carousel ul');
  var indicators = carousel.querySelector('.carousel__indicators');
  var listElems = carousel.querySelectorAll('.carousel li');

  var position = 0; // текущий сдвиг влево

  carousel.querySelector('.carousel__btn--left').onclick = function () {
    // сдвиг вправо
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0);
    shiftSlides(position);
    colorIndicators(Math.ceil(Math.abs(position / (width * count))));
  };

  carousel.querySelector('.carousel__btn--right').onclick = function () {
    // сдвиг влево
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    shiftSlides(position);
    colorIndicators(Math.ceil(Math.abs(position / (width * count))));
  };

  function shiftSlides(position) {
    list.style.marginLeft = position + 'rem';
  }

  // функция принимает key индикатора и на его основе вычисляет размер сдвига 
  function calculateShift(key) {
    var k = Number(key);
    var leftShift;
    if (k === 0) { 
      leftShift = 0;
      return leftShift;
    }
    var fragments = getQuantityFragments(count);
    var step = width * (count * fragments) / fragments * k;

    if (step > width * (listElems.length - count)) {
      step = step - (count * fragments - listElems.length) * width;
    }

    leftShift = step * -1;

    return leftShift;
  }

  function centerCard(viewPort, modifier) {
    // сдвинуть весь ul таким образом, чтобы карточка оказалась по центру
    var cardWidth = parseInt(getComputedStyle(document.querySelector('.card')).width);

    if (!modifier) { // для мобилы сдвигать так, чтобы одна карточка была по центру
      list.style.transform = 'translateX(' + (viewPort - cardWidth) / 2 + 'px)';
    } else { // для планшета сдвигать так, чтобы две карточки были по центру
      list.style.transform = 'translateX(' + (viewPort - (cardWidth * 2) - modifier) / 2 + 'px)';
    }
  }

  function changeParametres() {
    var screen = window.innerWidth;
    if (screen < 600) { // phones - для телефонов двигать по одной карточке
      position = 0;
      count = 1;
      centerCard(screen);
    } else if (screen < 1200) { // tablets - для планшетов двигать по две карточки
      count = 2;
      var modifier = parseInt(getComputedStyle(document.querySelector('div.carousel__row ul li')).marginRight);
      centerCard(screen, modifier);
    } else {
      count = 3; // desctop - для десктопа двигать по три карточки
    }
  }

  // Определить кол-во фрагментов для показа. Например если слайдер из 9 карточек и показываться будет по три карточки, то фрагментов будет 9/3 = 3
  function getQuantityFragments(divisor) {
    var fragments = Math.ceil(listElems.length / divisor);
    return fragments;
  }

  // обработчик клика на индикаторе
  function clickHandler(event) {
    var key = Number(event.target.dataset.indicatorKey);
    if (event.target.dataset.indicatorKey) {
      colorIndicators(key); // передаем функции key индикатора и она разукрашивает индикаторы влево и вправо от текущего
      position = calculateShift(key);
      shiftSlides(position);
    }
  }

  // В соответствии с кол-вом фрагментов(шагов) сгенерить и добавить дивы с классом 'carousel__indicators__indicator' и data-indicator-key каждому div'y
  function createIndicators(howMuch) {
    if (typeof howMuch !== "number") { return }
    var wrapper = document.createElement('div');
    for (var n = 0; n < howMuch; n += 1) {
      var div = document.createElement('div');
      div.className = "carousel__indicators__indicator";
      div.dataset.indicatorKey = n;
      div.addEventListener('click', clickHandler);
      wrapper.appendChild(div);
    }
    // перед вставкой удалить прошлый элементы
    var prev = indicators.firstElementChild;
    if (prev) {
      indicators.removeChild(indicators.firstElementChild);
    }
    indicators.appendChild(wrapper);
  }

  // функция разукрашивает индикаторы путём добавления css классов (текущий индикатор самый темный, следующий светлее и т.д. до 7 индикаторов в обе стороны, остальные одного цвета)
  function colorIndicators(current) {
    const limit = 7;
    const cssClass = "carousel__indicators__indicator";
    // var indicators = document.querySelectorAll('.carousel__indicators__indicator');
    var indicators = document.querySelectorAll('.' + cssClass);
    var howMuch = indicators.length;

    // сбросить раскраску
    indicators.forEach(function(indicator) {
      indicator.className = cssClass;
    });

    // разукрасить индикаторы с права-налево от текущей позиции
    for (var i = current; i < howMuch && i < current + limit; i += 1) {
      indicators[i].className = cssClass + " indicator-color-" + (limit - i + current);
    }
    // разукрасить с лева-направо от текущей позиции
    if (current > 0) {

      if (current <= 7) { // если current < 7
        for (var i = 0; i <= current; i += 1) {
          indicators[i].className = cssClass + " indicator-color-" + (limit + i - current);
        }
      } else {
        var start = current - limit + 1; // позиция с которой стартовать перебор массива indicators
        for (var i = start; i < current; i += 1) {
          var colorIndex = limit - (current - i);
          indicators[i].className = cssClass + " indicator-color-" + colorIndex;
        }
      }
    }
  }

  window.addEventListener('resize', function() {
    changeParametres();
    createIndicators(getQuantityFragments(count));
    setTimeout(function(){ colorIndicators(0) }, 0); // обернул в setTimeout, чтобы функция colorIndicators сработала, только после завершения функции createIndicators
  })
  document.addEventListener('DOMContentLoaded', function() {
    changeParametres();
    createIndicators(getQuantityFragments(count));
    setTimeout(function(){ colorIndicators(0) }, 0); // обернул в setTimeout, чтобы функция colorIndicators сработала, только после завершения функции createIndicators
  });
})();