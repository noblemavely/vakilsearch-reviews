/* The embedded video account.
   Edit the title and blurb here — they appear on the poster and in the section
   copy. `id` is the YouTube video ID from the share URL (youtu.be/<id>). */

export const video = {
  id: '3_GWIBQqLUM',
  // Shown on the poster before playback and used as the accessible label.
  title: 'A video account of this case',
  // One or two sentences under the heading.
  blurb: `A spoken account of the same events set out on this site — the engagement, the ten
    months, and where the refund stands.`,
};

/**
 * Click-to-load YouTube facade.
 *
 * Nothing is requested from YouTube until the visitor presses play: the poster is
 * drawn in CSS, and site.js swaps in a youtube-nocookie.com iframe on click. That
 * keeps the site's no-third-party-contact promise true for anyone who doesn't
 * choose to watch, and keeps the strict CSP meaningful.
 */
export function renderVideo(v = video) {
  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  return `<div class="video-embed" data-video-id="${v.id}" data-video-title="${v.title.replace(/"/g, '&quot;')}">
      <div class="video-poster">
        <button class="video-play" type="button">
          <span class="video-play-icon" aria-hidden="true"></span>
          <span class="video-play-text">Play video<span class="video-play-sub">Loads YouTube when you press play</span></span>
        </button>
      </div>
    </div>
    <p class="video-fallback">Nothing is loaded from YouTube until you press play. You can also
      <a href="${watchUrl}" rel="noopener nofollow">watch it on YouTube directly</a>.</p>`;
}
