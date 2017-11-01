"use strict";

/* Get smal photo */
let smallImg = document.querySelector("[src*='img/small_avatar.png']");
let bigImg = document.querySelector("[src*='img/avatar.png']");
smallImg.onclick = function(){
  smallImg.classList.add('hidden');
  bigImg.classList.remove('hidden');
  span.style.display = 'block';
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('bigPhoto__close')[0];

// When the user clicks on <span> (x), close the modal
function closePhoto() { 
  span.style.display = 'none';
  bigImg.classList.add('hidden');
  smallImg.classList.remove('hidden');
}

span.onclick = closePhoto;
bigImg.onclick = closePhoto;

