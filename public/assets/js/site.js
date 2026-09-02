/* vakilsearch.reviews — minimal progressive enhancement.
   Mobile nav toggle only. The site is fully readable with JS disabled. */
(function () {
  var btn = document.querySelector('.navtoggle');
  var links = document.querySelector('.sitenav-links');
  if (!btn || !links) return;

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
})();
