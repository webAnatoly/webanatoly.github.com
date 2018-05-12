'use strict';
/* import styles */
import normalize from "../css/normalize.css";
import main from "../css/main.css";
import h from "../css/header.css";
import f from "../css/footer.css";
import s1 from "../css/section_1.css";
import s2 from "../css/section_2.css";
import s3 from "../css/section_3.css";
import s4 from "../css/section_4.css";

/* import images */
import left_arrow from "../img/left_arrow.png";
import right_arrow from "../img/right_arrow.png";
import aside_cube from "../img/aside_cube.png";
import aside_question_mark from "../img/aside_question_mark.png";
import aside_play from "../img/aside_play.png";
import slide_1 from "../img/slides/slide_1.png";
import slide_2 from "../img/slides/slide_2.png";
import slide_3 from "../img/slides/slide_3.png";
import search_icon from "../img/search_icon.png";
import basket_icon from "../img/basket_icon.png";
import logo from "../img/logo.png";
import carousel_1 from "../img/carousel/carousel_1.png";
import carousel_2 from "../img/carousel/carousel_2.png";
import carousel_3 from "../img/carousel/carousel_3.png";
import carousel_4 from "../img/carousel/carousel_4.png";
import gnat from "../img/beasts/gnat.png";
import cockroach from "../img/beasts/cockroach.png";
import squirrel from "../img/beasts/squirrel.png";
import bird from "../img/beasts/bird.png";
import mouse from "../img/beasts/mouse.png";
import rat from "../img/beasts/rat.png";
import human_1 from "../img/people/human_1.png";

import webMoney from "../img/footerIcons/webMoney.png";
import qiwi from "../img/footerIcons/qiwi.png";
import card from "../img/footerIcons/card.png";
import sviaznoy from "../img/footerIcons/sviaznoy.png";
import yandexMoney from "../img/footerIcons/yandexMoney.png";
import visa from "../img/footerIcons/visa.png";
import post from "../img/footerIcons/post.png";
import aero from "../img/footerIcons/aero.png";
import ems from "../img/footerIcons/ems.png";
import vk from "../img/footerIcons/vk.png";
import facebook from "../img/footerIcons/fs.png";
import google from "../img/footerIcons/g.png";
import youtube from "../img/footerIcons/youtube.png";



let wrapper = document.getElementById('wrapper');
let textForMobileMenu = '<span>&#9776;</span> Показать меню</a>';

let html = `
  
  <header class="${h.header}">
    <div class="${h.container}">
      <img class="${h.logo}" src="${logo}">
    </div>
    <div class="${h.container}">
      <div class="${h.contactsAndTextWrapper}">
        <div class="${h.contacts}">
          <p>Москва +7 (499) 000 - 00 - 00</p>
          <p>Регионы РФ: 8 800 0000 000</p>
        </div>
        <div class="${h.textBlock}">
          <p> <a href="#">Заказать звонок</a></p>
          <p> или <a href="#">написать нам</a>. </p> 
        </div>
      </div>
      <form class="${h.searchFormWrapper}">
        <input type="search" class="${h.searchInput}" placeholder="Поиск среди 35 000 товаров">
        <input type="submit" class="${h.searchButton}" value="">
      </form>
    </div>
    <div class="${h.container}">
      <div class="${h.logOrSingUp}"><a href="#">Войти</a> или <a href="#">зарегистрироваться</a></div>
      <div class="${h.basketBox}">
        <p><img src="${basket_icon}"></p>
        <p><a href="#" class="${h.basketLink}">Корзина</a></p>
        <p><span class="${h.basketSum}"> 1400</span> руб. </p>
        <p>Доставка: с 09.00 до 19.00 (МСК)</p>
      </div>
    </div>
  </header>
  <section class="${main.container}  ${s1.section}">
    <nav class="${s1.menu}">
      <div class="${s1.mobMenu}"><a href="#">${textForMobileMenu}</div>
      <ul class="${s1.firstUl}  ${s1.firstUlMobile}">
        <li>
          <a href="#">по вредителям <span>&#9660;</span></a>
          <ul class="${s1.hiddenUl}">
            <li><a href="#">вредитель_1</a></li>
            <li><a href="#">вредитель_2</a></li>
            <li><a href="#">вредитель_3</a></li>
            <li><a href="#">вредитель_4</a></li>
            <li><a href="#">вредитель_5</a></li>
            <li><a href="#">вредитель_6</a></li>
          </ul>
        </li>
        <li>
          <a href="#">по виду продукции <span>&#9660;</span></a>
          <ul class="${s1.hiddenUl}">
            <li><a href="#">вид продукта_1</a></li>
            <li><a href="#">вид продукта_2</a></li>
            <li><a href="#">вид продукта_3</a></li>
            <li><a href="#">вид продукта_4</a></li>
          </ul>
        </li>
        <li><a href="#">по брендам <span>&#9660;</span></a>
          <ul class="${s1.hiddenUl}">
            <li><a href="#">бренд_1</a></li>
            <li><a href="#">бренд_2</a></li>
            <li><a href="#">бренд_3</a></li>
          </ul>
        </li>
        <li><a href="#">аксессуары <span>&#9660;</span></a>
          <ul class="${s1.hiddenUl}">
            <li><a href="#">аксессуар_1</a></li>
            <li><a href="#">аксессуар_2</a></li>
            <li><a href="#">аксессуар_3</a></li>
            <li><a href="#">аксессуар_4</a></li>
            <li><a href="#">аксессуар_5</a></li>
          </ul>
        </li>
        <li><a href="#">акции</a></li>
        <li><a href="#">база знаний</a></li>
      </ul>
    </nav>
    <div class="${s1.slider}  ${s1.flexItem_order}">
      <div class="${s1.containerForSlides}">
        <div class="${s1.wrapperSlide}"><img src="${slide_1}" class="${s1.imgForSlider}"></div>
        <div class="${s1.wrapperSlide}"><img src="${slide_2}" class="${s1.imgForSlider}"></div>
        <div class="${s1.wrapperSlide}"><img src="${slide_3}" class="${s1.imgForSlider}"></div>
      </div>
      <img src="img/left_arrow.png" class="${s1.left_arrow}">
      <img src="img/right_arrow.png" class="${s1.right_arrow}">
      <div class="${s1.contaierForCircles}">
        <div class="${s1.smallCircle} ${s1.smallCircleCurrent}"></div>
        <div class="${s1.smallCircle}"></div>
        <div class="${s1.smallCircle}"></div>
      </div>
    </div>
    <div class="${s1.aside}">
      <div class="${s1.asideInner}">
        <div class="${s1.mediumCirle}"><img src="img/aside_cube.png"> </div>
        <h2>Оптовикам</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet soluta natus fugiat nisi nihil, at.</p>
      </div>
      <div class="${s1.asideInner}">
        <div class="${s1.mediumCirle}"><img src="img/aside_question_mark.png"> </div>
        <h2>Задать вопрос</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, vel dolorem nesciunt!</p>
      </div>
      <div class="${s1.asideInner}">
        <div class="${s1.mediumCirle}"><img src="img/aside_play.png"> </div>
        <h2>Видео</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptatibus atque architecto!</p>
      </div>
    </div>
  </section> <!-- ${s1.section} -->
  <section class="${main.container}  ${s2.section}">
    <div class="${s2.menu}">
      <ul>
        <li class="${s2.current}"><a href="#">новинки</a> <span class="${s2.indicator}"></span></li>
        <li><a href="#">рекомендуем</a> <span class="${s2.indicator}"></span></li>
        <li><a href="#">хиты продаж</a> <span class="${s2.indicator}"></span></li>
        <li><a href="#">акции</a> <span class="${s2.indicator}"></span></li>
        <li><a href="#">бренды</a> <span class="${s2.indicator}"></span></li>
      </ul>
    </div>
    <div class="${s2.carouselButtonLeft}">
      <div class="${s2.wrapperForHover}">
        <div class="${s2.leftArrow}"></div>
        <div class="${s2.leftArrow}"></div>
      </div>
    </div>
    <div class="${s2.carouselWrapper}">
      <div class="${s2.itemsContainer}">
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src="${carousel_1}"></div>
          <p class="${s2.description}">"Коготь" SuperCat <br> Ловушка для мышей</p>
          <p class="${s2.value}"><span>19890</span> руб.</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src="${carousel_2}"></div>
          <p class="${s2.description}">Крысоловка Swissinno <br> SuperCat</p>
          <p class="${s2.value}"><span>3200</span> руб.</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src="${carousel_3}"></div>
          <p class="${s2.description}">"Коготь" SuperCat <br> Ловушка для мышей</p>
          <p class="${s2.value}"><span>19890</span> руб.</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src="${carousel_4}"></div>
          <p class="${s2.description}">Victors Электронный <br> уничтожитель грызунов</p>
          <p class="${s2.value}"><span>2850</span> руб.</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src=""></div>
          <p class="${s2.description}">Description</p>
          <p class="${s2.value}">Sum</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src=""></div>
          <p class="${s2.description}">Description</p>
          <p class="${s2.value}">Sum</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src=""></div>
          <p class="${s2.description}">Description</p>
          <p class="${s2.value}">Sum</p>
        </div>
        <div class="${s2.carouselItem}">
          <div class="${s2.imgWrapper}"><img src=""></div>
          <p class="${s2.description}">Description</p>
          <p class="${s2.value}">Sum</p>
        </div>
      </div>
    </div>
    <div class="${s2.carouselButtonRigth}">
      <div class="${s2.wrapperForHover}">
        <div class="${s2.rightArrow}"></div>
        <div class="${s2.rightArrow}"></div>
      </div>
    </div>
  </section> <!-- ${s2.section} -->
  <section class="${main.container}  ${s3.section}">
    <h1>Топ вредителей</h1>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${gnat}"></div>
      <div class="${s3.imgDescription}"><p>Комары</p></div>
    </div>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${cockroach}"></div>
      <div class="${s3.imgDescription}"><p>Тараканы</p></div>
    </div>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${squirrel}"></div>
      <div class="${s3.imgDescription}"><p>Грызуны</p></div>
    </div>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${bird}"></div>
      <div class="${s3.imgDescription}"><p>Птицы</p></div>
    </div>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${mouse}"></div>
      <div class="${s3.imgDescription}"><p>Мыши</p></div>
    </div>
    <div class="${s3.imgContainer}">
      <div class="${s3.imgWrap}"><img src="${rat}"></div>
      <div class="${s3.imgDescription}"><p>Крысы</p></div>
    </div>
    <div class="${s3.line}"></div>
  </section><!-- ${s3.section} -->
  <section class="${main.container}  ${s4.section}">
    <div class="${s4.video}">
      <h1>Видео</h1>
      <iframe class="${s4.iframe}" width="382" height="215" src="https://www.youtube.com/embed/JNrRMS4X9ew" frameborder="0" allowfullscreen>
        Your borouser doesn't support &#60iframe&#60
      </iframe>
    </div>
    <div class="${s4.advices}">
      <h1>Отзывы</h1>
      <img src="${human_1}">
      <h2>Ларина Светлана</h2>
      <p class="${s4.greyText}">Садовод любитель</p>
      <p class="${s4.greyText}">Стаж два года</p>
      <br><br>
      <p><span>&laquo;</span> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Pariatur itaque officiis, dolore et quo labore alias hic, 
          possimus architecto error sunt eaque placeat similique enim modi, quos add. 
          <span>&raquo;</span></p>
      <br>
      <p><a href="#">Посмотреть все отзывы</a></p>
    </div>
    <div class="${s4.subscribe}">
      <h1>Подписаться</h1>
      <p class="${s4.greyText}">Подпишитесь на рассылку, чтобы первыми узнавать о наших новинках и получать призы</p>
      <form>
        <input type="text" placeholder="*Эл. почта">
        <input type="text" placeholder="Имя">
        <input type="submit" value="Отправить">
      </form>
      <p>Заполните <a href="#">анкету</a> и получайте индивидуальные предложения</p>
    </div>
  </section><!-- ${s4.section} -->
  <footer class="${f.footer}">
    <div class="${main.container}">
      <div class="${f.about}">
        <h4>О нас</h4>
        <p><a href="#">О компании</a></p>
        <p><a href="#">Отзывы</a></p>
        <p><a href="#">Мы и СМИ</a></p>
        <p><a href="#">База знаний</a></p>
        <p><a href="#">Контакты</a></p>
        <p><a href="#">Лента событий</a></p>
        <span class="${f.copy}">&#169; 2016 &laquo;PEST 911&raquo;</span>
      </div>
      <div class="${f.service}">
        <h4>Сервис</h4>
        <p><a href="#">Условия доставки</a></p>
        <p><a href="#">Условия оплаты</a></p>
        <p><a href="#">Условия возврата</a></p>
        <p><a href="#">Оптовикам</a></p>
        <p><a href="#">Гарантийные обязательства</a></p>
        <p><a href="#">Конфиденциальность</a></p>
        <img src="${vk}">
        <img src="${facebook}">
        <img src="${google}">
        <img src="${youtube}">
      </div>
      <div class="${f.payment}">
        <h4>Способы оплаты</h4>
        <a href="#"><img src="${webMoney}"></a>
        <a href="#"><img src="${qiwi}"></a>
        <a href="#"><img src="${card}"></a>
        <a href="#"><img src="${sviaznoy}"></a>
        <a href="#"><img src="${yandexMoney}"></a>
        <a href="#"><img src="${visa}"></a>
      </div>
      <div class="${f.deliver}">
        <h4>Способы доставки</h4>
        <p><a href="#"><img src="${post}"></a></p>
        <p><a href="#"><img src="${aero}"></a></p>
        <p><a href="#"><img src="${ems}"></a></p>
        <p class="${f.add}">Создание сайта - компания <a href="#">&laquo;Пиком&raquo;</a></p>
      </div>
    </div>
  </footer>

`;

wrapper.innerHTML = html;


/* Dropdown menu handler */
(function(){

  let menuItems = document.querySelectorAll(`.${s1.firstUl} > li > a`);

  function dropMenu() {

    let uls = this.parentElement.parentElement.querySelectorAll('ul'),         // получить все элементы меню .hiddenUl
        i = uls.length-1,
        span = this.parentElement.querySelector('span'),
        triangleSymbol = '▼',
        closeSymbol = '&times;';

    for (i ; i >= 0 ; i--) {                                                  // пройти по всем элементам меню
      if (this.parentElement.lastElementChild == uls[i]) {                    // если текущий элемент меню совпадает, с тем по которому кликнул юзер, то показать выпадающий список
        uls[i].classList.toggle(s1.show);
        uls[i].parentElement.querySelector('a').classList.toggle(s1.white);   // изменить цвет текста
        if (span.innerHTML == triangleSymbol) {                               // показываем крестик для закрытия выпавшего меню и меняем крестик на треугольник, если меню сворачивается
          span.innerHTML = closeSymbol; 
        } else {
          span.innerHTML = triangleSymbol;
        };
      } else {
        uls[i].classList.remove(s1.show);                             // у остальных пунктов скрывает выпадающий список
        uls[i].parentElement.querySelector('a').classList.remove(s1.white);    // изменить цвет на первоночальный
        uls[i].parentElement.querySelector('span').innerHTML = triangleSymbol; // меняем крестик на треукольник у всех закрытых элементов меню
      }
    }  

  }

  menuItems[0].addEventListener('click', dropMenu);
  menuItems[1].addEventListener('click', dropMenu);
  menuItems[2].addEventListener('click', dropMenu);
  menuItems[3].addEventListener('click', dropMenu);
})();






/* Mobile menu handler */
(function(){

  let mainMenu = document.querySelector(`.${s1.menu}`),
      mobMenu = document.querySelector(`.${s1.mobMenu}`),
      hrefMobMenu = mobMenu.querySelector(`a`),
      trigramMobMenu = mobMenu.querySelector(`span`),
      firstUl = mainMenu.querySelector(`.${s1.firstUl}`),
      textForCloseMenu = '<span>&#10006;</span> Скрыть меню',
      triggerText = textForMobileMenu;


  function mobMenuHandler() {

    firstUl.classList.toggle(s1.firstUlMobile); // включает(выключает) основное меню по клику

    // переключает текст в мобильном меню с "Показать меню" на "Скрыть меню"
    if (triggerText !== textForCloseMenu) {
      hrefMobMenu.innerHTML = textForCloseMenu;
      triggerText = textForCloseMenu;
    } else {
      hrefMobMenu.innerHTML = textForMobileMenu;
      triggerText = textForMobileMenu;
    }

  }    

  hrefMobMenu.addEventListener('click', mobMenuHandler);
})();




/* Slider Handler */
(function() {

  let sliderButtons = document.querySelectorAll(`[class~=${s1.slider}]>[class*="arrow"]`),
      leftSliderButton = sliderButtons[0],
      rightSliderButton = sliderButtons[1],
      containerForSlides = document.querySelector(`.${s1.containerForSlides}`),
      allSmallCircles = document.querySelectorAll(`[class=${s1.contaierForCircles}] div`),
      wrapperSlide = document.querySelectorAll(`.${s1.wrapperSlide}`),
      max = containerForSlides.children.length,
      min = 0,
      metric = 0;

  let sliderWidth = 631.5; 
  let idSetInterval;


  function setSliderWidth() { 
    /* Обработчик события 'resize' страницы. 
    Он обнуляет все метрики для слайдера. 
    Обновляет переменную sliderWidth в соответсвтии с текущей шириной видимой области экрана. 
    Вызывает функцию changeSlideToward(), если слайдер уже запущен. 
    Это всё сделано для того, чтобы слайдер автоматически подгонялся под размер видимой области во время resize страницы*/ 
    
    if (document.documentElement.clientWidth <= 768) {
      sliderWidth = document.documentElement.clientWidth;
    } 
    metric = 0; 
    min = 0;
    if (idSetInterval) { 
      changeSlideToward();
    }
  }
  // setSliderWidth();


  /* Fit slider width to small displays viewport */
  function fitSliderToSmallViewport() {
    if (document.documentElement.clientWidth <= 768) {
      setSliderWidth();
      let i = wrapperSlide.length;
      for (; i > 0; i--) {
        wrapperSlide[i-1].style.width = sliderWidth + 'px'; // get current ".slider" width and set it for each ".wrapperSlide"
      }
    } else {
      sliderWidth = 631.5;
      metric = 0; 
      min = 0;
      let a = wrapperSlide.length;
      for (; a > 0; a--) {
        wrapperSlide[a-1].style.width = sliderWidth + 'px'; // get current ".slider" width and set it for each ".wrapperSlide"
      }
      changeSlideToward()
    }
  }
  fitSliderToSmallViewport(); 
  window.addEventListener("resize", fitSliderToSmallViewport, true);


  /* Right slider button handler */
  function changeSlideToward() {
    if (min < max-1) {
      metric += sliderWidth;
      containerForSlides.style.left = '-' + metric + 'px';
      allSmallCircles[min].classList.remove(s1.smallCircleCurrent);
      allSmallCircles[min+1].classList.add(s1.smallCircleCurrent);
      min++;
    } else {
      allSmallCircles[min].classList.remove(s1.smallCircleCurrent);
      metric = 0;
      min = 0;
      allSmallCircles[min].classList.add(s1.smallCircleCurrent);
      containerForSlides.style.left = '-' + metric + 'px';
    }
  }

  /* Left slider button handler */
  function changeSlideBack() {
    if (metric > 0) {
      allSmallCircles[min].classList.remove(s1.smallCircleCurrent);
      metric -= sliderWidth;
      containerForSlides.style.left = '-' + metric + 'px';
      allSmallCircles[min-1].classList.add(s1.smallCircleCurrent);
      min--;
    } else {
      allSmallCircles[min].classList.remove(s1.smallCircleCurrent);
      metric = sliderWidth * (max-1);
      min = max;
      allSmallCircles[min-1].classList.add(s1.smallCircleCurrent);
      containerForSlides.style.left = '-' + metric + 'px';
      min--;
    }
  }

  /* Automatically shift slides */
  idSetInterval = setInterval(changeSlideToward, 5000);

  rightSliderButton.addEventListener('click', changeSlideToward);
  leftSliderButton.addEventListener('click', changeSlideBack);
})();

/* Handler of Carousel from section {s2.section} */
(function(){

  let itemsContainer = document.querySelector(`.${s2.itemsContainer}`),
      leftButton = document.querySelector(`.${s2.carouselButtonRigth}`),
      rightButton = document.querySelector(`.${s2.carouselButtonLeft}`),
      allSlides = document.querySelectorAll(`.${s2.carouselItem}`),
      numberOfSlides = allSlides.length,
      metric = 0;

  function discardMetrics (){
    numberOfSlides = allSlides.length,
    metric = 0;
    itemsContainer.style.left = "";
  }

  function setWidthSlidesMobile() {
    let i = allSlides.length;
    for (; i > 0 ; i--) {
      allSlides[i-1].style.width = (document.documentElement.clientWidth - 40) + 'px';
      allSlides[i-1].style.marginLeft = '20px';
    }
  }

  function setWidthSlidesNormal() {
    let i = allSlides.length;
    for (; i > 0 ; i--) {
      allSlides[i-1].style.width = 169 + 'px';
      allSlides[i-1].style.marginLeft = '0px';
    }
  }

  function checkWidth() {
    if (document.documentElement.clientWidth <= 360) {
      setWidthSlidesMobile();
    } else {
      setWidthSlidesNormal();
    }
  } 
  checkWidth();                                   // проверяем ширину при загрузке страницы
  window.addEventListener('resize', checkWidth);  // и при изменении размеров окна браузера


  function carouselLeft() {
    if (document.documentElement.clientWidth > 768 && numberOfSlides > 4) {
      metric += 915;
      numberOfSlides -= 4;
      itemsContainer.style.left = '-' + metric + 'px';
    } else if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 360 && numberOfSlides > 3) {
      metric += 640;
      numberOfSlides -= 3;
      itemsContainer.style.left = '-' + metric + 'px';
    } else if (document.documentElement.clientWidth < 360 && numberOfSlides > 1) {
      metric += document.documentElement.clientWidth + 40;
      numberOfSlides -= 1;
      itemsContainer.style.left = '-' + metric + 'px';
    }
  }

  function carouselRight() {
    if (document.documentElement.clientWidth > 768 && metric > 0) {
      metric -= 915;
      numberOfSlides += 4;
      itemsContainer.style.left = '-' + metric + 'px';
    } else if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 360 && metric > 0) {
      if ((metric - 640) == 0) { 
        itemsContainer.style.left = '55px';
        metric = 0;
        numberOfSlides += 3;
      } else {
        metric -= 640;
        numberOfSlides += 3;
        itemsContainer.style.left = '-' + metric + 'px';
      }
    } else if (document.documentElement.clientWidth < 360 && metric > 0) {
      metric -= document.documentElement.clientWidth + 40;
      numberOfSlides += 1;
      itemsContainer.style.left = '-' + metric + 'px';
    }
  }

  leftButton.addEventListener('click', carouselLeft);
  rightButton.addEventListener('click', carouselRight);
  window.addEventListener('resize', discardMetrics);
})();



