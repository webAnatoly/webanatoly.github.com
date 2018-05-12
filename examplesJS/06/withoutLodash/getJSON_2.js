'use strict';

function ResponsiveSearch (options) {
  let parent = options.parent; // элемент в который будем добавлять наш виджет
  try { if(!parent.closest('body')) parent = document.body; } catch (err) { parent = document.body; } // если получили некорректный 'parent', то добавляем виджет в конец 'body'

  // создаем форму поиска
  let template = 
  `<form class="search-form">
    <input type="text" class="search" placeholder="${options.placeholder}">
    <ul class="suggestions">
      ${cutDownLists()}
    </ul>
  </form>`;

  let wdgt = document.createElement('div');
  wdgt.innerHTML = template;
  parent.appendChild(wdgt);

  let form = wdgt.querySelector('.search-form'),
      input = form.querySelector('.search'),
      ul = form.querySelector('ul');

  let arr = [];

  // получает json с сервера и конвертирует его в массив 
  fetch(options.src).then(res => res.json()).then(data => {
    for (let i = 0; i < data.length; i++) {
      arr[i] = data[i];
    }
    arr = data;
  });

  // фильтрует массив объектов
  function filterData(arr, mask) {
    mask = mask.trim();
    if(!mask.length) return false; // если ввели только пробелы, то возвращаем false.
    let filteredValues = [];
    let reg = new RegExp(mask, 'i');
    filteredValues = arr.filter((value) => {
      if (value.city.search(reg) != -1) return true;
    });
    return filteredValues;
  }

  // выводит отфильтрованные результаты на страницу
  function showResults(event) {
    let target = event.target;
    if (!target.value.length){ // если очистили поле ввода, то стираем результаты поиска
      ul.innerHTML = cutDownLists(); 
      return;
    }; 
    
    let results = filterData(arr, target.value);

    if (!results) return; // если ввели только пробелы, то оставляем всё без изменений

    let reg = new RegExp(target.value, 'gi');
    let html = '';
    for (let i = 0; i < results.length; i++) {
      let cityNames = results[i].city.replace(reg, `<span class="highlight">${target.value}</span>`);
      html += `<li>
                <span class="name"> ${cityNames}, ${results[i].state} </span>
                <span class="population"> ${numberWithCommas(results[i].population)} </span>
              </li>`;
    }
    ul.innerHTML = html;
    addZindex(false, ul); // добавляет z-index, чтобы результаты поиска показывались поверх остальных элементов на странице 
  }

  function addZindex(event, elem) {
    if (elem) { ul.classList.add('coverAll'); return; }
    if (event.target) {
      let target = event.target.closest('.search-form').querySelector('.suggestions');
      if (target.tagName != 'UL') return;
      target.classList.add('coverAll');
    }
  }

  function removeZindex(event) {
    let target = event.target.closest('.search-form').querySelector('.suggestions');
    target.classList.remove('coverAll');
    target.innerHTML = cutDownLists();
  }

  // проверяет значения для тегов <li> введенные при инициализации. Если значение не было введено, то возвращает пустую строку.
  function cutDownLists () { 
    if (options.filterName && options.filterDescription) {
      return `<li>${options.filterName}</li><li>${options.filterDescription}</li>`;
    } else if (options.filterName) {
      return `<li>${options.filterName}</li>`;
    } else if (options.filterDescription) {
      return `<li>${options.filterDescription}</li>`
    } else {
      return '';
    }
  }

  // получает номер в виде строки, возвращает номер с разделителями
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',' );
  }

  this.getNumber = numberWithCommas;

  input.addEventListener('keyup', showResults);
  input.addEventListener('blur', removeZindex);
  input.addEventListener('focus', addZindex);
  input.addEventListener('focus', showResults);
}

