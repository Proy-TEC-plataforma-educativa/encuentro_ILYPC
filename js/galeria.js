const dialog = document.querySelector('.lightbox');
const dialogImage = dialog?.querySelector('img');
const dialogTitle = dialog?.querySelector('#lightbox-title');
const closeButton = dialog?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-open').forEach((button) => {
  button.addEventListener('click', () => {
    if (!dialog || !dialogImage) return;
    const title = button.dataset.title || button.dataset.alt || 'Imagen ampliada';
    dialogImage.src = button.dataset.full;
    dialogImage.alt = button.dataset.alt || '';
    if (dialogTitle) dialogTitle.textContent = title;
    closeButton?.setAttribute('aria-label', `Cerrar: ${title}`);
    dialog.showModal();
  });
});

closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
