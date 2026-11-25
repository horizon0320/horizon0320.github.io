(() => {
  const link = document.querySelector('.author__photo-link');
  const dialog = document.getElementById('profile-photo-dialog');
  if (!link || !dialog || typeof dialog.showModal !== 'function') return;

  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
