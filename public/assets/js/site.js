/* vakilsearch.reviews — minimal progressive enhancement.
   Mobile nav toggle, and click-to-load for the video embed.
   The site is fully readable with JS disabled. */
(function () {
  /* ---------- Mobile navigation ---------- */
  var btn = document.querySelector('.navtoggle');
  var links = document.querySelector('.sitenav-links');
  if (btn && links) {
    btn.hidden = false;
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });

    // Collapse the menu when a link is followed on small screens.
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && links.classList.contains('open')) {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }

  /* ---------- Video: load YouTube only on an explicit click ----------
     Until someone presses play, no request is made to YouTube and no cookie
     is set. The poster is drawn in CSS, so nothing third-party is fetched to
     render it either. The iframe uses youtube-nocookie.com. */
  var embeds = document.querySelectorAll('.video-embed[data-video-id]');

  Array.prototype.forEach.call(embeds, function (embed) {
    var play = embed.querySelector('.video-play');
    if (!play) return;

    var id = embed.getAttribute('data-video-id');
    var title = embed.getAttribute('data-video-title') || 'Video';
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return; // ignore anything unexpected

    play.setAttribute('aria-label', 'Play video: ' + title + '. Loads YouTube.');

    play.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1&rel=0&modestbranding=1';
      frame.title = title;
      frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';

      embed.innerHTML = '';
      embed.appendChild(frame);
      frame.focus();
    });
  });
})();
