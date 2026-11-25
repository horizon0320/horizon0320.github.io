(() => {
  const button = document.querySelector('.author__photo-toggle');
  if (!button) return;
  const image = button.querySelector('img');
  const caption = document.getElementById('profile-photo-caption');
  const originalSource = image.getAttribute('src');
  const originalAlt = image.alt;

  button.addEventListener('click', () => {
    const showDetail = button.getAttribute('aria-pressed') !== 'true';
    image.src = showDetail ? button.dataset.photoDetail : originalSource;
    image.alt = showDetail ? 'Ruize Hui before preparing for his CCS presentation' : originalAlt;
    button.setAttribute('aria-pressed', String(showDetail));
    button.setAttribute('aria-label', showDetail ? 'Show profile photo' : 'Show photo before the CCS presentation');
    caption.hidden = !showDetail;
  });
})();
