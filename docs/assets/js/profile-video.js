(function() {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileVideo);
  } else {
    initProfileVideo();
  }

  function initProfileVideo() {
    const cont = document.getElementById('cont');
    const video = document.querySelector('.profile-video');
    const img = document.querySelector('#cont img');

    if (!cont || !video || !img) {
      return;
    }

    video.style.opacity = '0';
    img.style.opacity = '1';
    video.preload = 'metadata';

    cont.addEventListener('mouseenter', () => {
      img.style.opacity = '0';
      video.style.opacity = '1';
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    });

    video.addEventListener('ended', () => {
      video.style.opacity = '0';
      img.style.opacity = '1';
    });

    cont.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      img.style.opacity = '1';
    });

    cont.addEventListener('touchstart', () => {
      img.style.opacity = '0';
      video.style.opacity = '1';
      video.play().catch(() => {});
    });

    cont.addEventListener('touchend', () => {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      img.style.opacity = '1';
    });
  }
})();
