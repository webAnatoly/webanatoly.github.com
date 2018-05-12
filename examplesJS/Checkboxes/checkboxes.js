'use strict';

function Inbox (options) {

  let textForHint = "Двойной клик для редактирования"
  let template = `
    <div class="item">
      <input type="checkbox">
      <p>This is an inbox layout.</p>
      <span class="hint hide">${textForHint}</span>
    </div>
  `;

  if (options.row) {
    let multyTemplate = template;
    for (let i = options.row; i > 1; i--) {
      multyTemplate += template;
    }
    template = multyTemplate;
  } 
  
  options.inbox.innerHTML = template;

  
  let lastChecked;

  function handleCheck(e) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let inBetween = false;
    if(isNOchecked(e.target, checkboxes)) inBetween = true;
    if (e.shiftKey && e.target.checked) { // Check if they had the shift key down AND check that they are checked
      checkboxes.forEach(checkbox => {
        if (checkbox === e.target || checkbox === lastChecked) {
          inBetween = !inBetween; // 'Starting to check inbetween.';
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = e.target;
  }

  function isNOchecked(current, checkboxes) { // return true if all boxes except current is NO checked
    for (let i = 0; i < checkboxes.length; i++ ) {
      if(checkboxes[i] == current) continue;
      if (checkboxes[i].checked) return false;
    }
    return true;
  }

  options.inbox.addEventListener('click', handleCheck);
  options.inbox.addEventListener('dblclick', editEntry);
  options.inbox.addEventListener('mousemove', showHint);


  // Public method for adding a new row 
  this.addRow = function (string) {
    let div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
        <input type="checkbox">
        <p>${string ? string : 'Default string'}</p>
        <span class="hint hide">${textForHint}</span>
    `;
    options.inbox.appendChild(div);
  }

  // Public method for removing all checked strings
  this.removeRows = function () {
    document.querySelectorAll('input[type="checkbox"]').forEach(row => {
      if (row.checked) row.parentElement.parentElement.removeChild(row.parentElement);
    });
  }

  function editEntry(event) { // on double click start edit entry
    let paragraph = event.target.closest('p');
    if (!paragraph) return;
    let textarea = document.createElement('textarea');
    textarea.classList.add('inbox__textarea');
    paragraph.parentElement.appendChild(textarea);
    textarea.value = paragraph.innerHTML;
    textarea.focus();
    paragraph.style.display = 'none';
    creatEditMenu(paragraph.parentElement, paragraph, textarea);
    hideHint(paragraph.parentElement.querySelector('.hint'));
  }

  function creatEditMenu(item, p, textarea) { 
    let menu = document.createElement('div');
    menu.classList.add('inbox__menu');
    menu.innerHTML = `
      <div class="inbox__menu__submit">submit</div>
      <div class="inbox__menu__cansel">cansel</div>
    `;
    item.appendChild(menu);
    item.querySelector('.inbox__menu__submit').addEventListener('click', ()=> handleChanges(item, p, textarea, menu, true) );
    item.querySelector('.inbox__menu__cansel').addEventListener('click', ()=> handleChanges(item, p, textarea, menu, false) );
  }

  function handleChanges(item, p, textarea, menu, flag) {
    item.removeChild(menu);
    if (flag) p.innerHTML = textarea.value;
    textarea.style.display = 'none';
    p.style.display = 'block';
  }

  function showHint(event) {
    let p = event.target.closest('p');
    if(!p) return;
    let hint = p.nextElementSibling;
    hint.classList.add('show');
    hint.classList.remove('hide');
    let idTimeout = setTimeout( () => hideHint(hint), 3000);
    p.addEventListener('mouseleave', (e) => hideHint(hint, idTimeout));
  }

  function hideHint(hint, idTimeout) {
    if(idTimeout)  clearTimeout(idTimeout);
    hint.classList.remove('show');
    hint.classList.add('hide');
  } 
}



// Tasks: 
/*
add pop up hint for <p>
всплывающая подсказка мелькает, сделать чтобы не мелькала

*/
