const videoWrapper = document.querySelector('#video-wrapper');

// уменьшить z-index если клик не на плеере
document.addEventListener('click', function() {
  if (document.activeElement !== document.querySelector("iframe#player")) {
    videoWrapper.classList.remove('big-zindex');
  }
});

// плеер на передний план если курсор над ним
// videoWrapper.addEventListener('mouseover', function() {
//   videoWrapper.classList.add('big-zindex');
// });


// 1. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '219',
    width: '360',
    videoId: 'CYU0h6pCrxA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  return true;
}

// Видео на первый план, если нажали "play"
function onPlayerStateChange(event) {
  if (event.data == 1 || event.data == 2) {
    videoWrapper.classList.add('big-zindex');
  }
}
