'use strict';

// Slider

let next = document.querySelector('.right'),
    prev = document.querySelector('.left'),
    imgContainer = document.querySelector('.slides'),
    max = imgContainer.children.length * 100,
    counter = 0;

function showNextImg() {
  if (counter < max-100) {
    counter += 100;
    imgContainer.style.left = '-' + counter + '%';
  } else {
    counter = 0;
    imgContainer.style.left = counter;
  }
}
next.onclick = showNextImg;

function showPrevImg() {
  if (counter > 0) {
    counter -= 100;
    imgContainer.style.left = '-' + counter + '%';
  } else {
    counter = max-100;
    imgContainer.style.left = '-' + counter + '%';
  }
}
prev.onclick = showPrevImg;

setInterval(showNextImg, 20000);


