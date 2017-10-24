"use strict";

/* Get smal photo */
let img = document.querySelector("[src*='img/small_avatar.png']");
let label = img.src.length;
console.log(label);
img.onclick = function(){
  img.src = 'img/avatar.png';
  span.style.display = 'block';
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('bigPhoto__close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  span.style.display = 'none';
  img.src = 'img/small_avatar.png';
}
