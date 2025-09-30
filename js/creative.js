document.addEventListener('DOMContentLoaded', () => {
  const images = Array.from(document.querySelectorAll('.gallery img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.close-btn');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;

  if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxCaption || images.length === 0) {
    return;
  }

  function openLightbox(index) {
    const img = images[index];
    if (!img) return;

    currentIndex = index;
    lightboxImg.src = img.src;
    lightboxTitle.textContent = img.dataset.title || '';
    lightboxCaption.innerHTML = img.dataset.caption || '';
    lightbox.classList.remove('hidden');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (rightArrow && leftArrow) {
    rightArrow.addEventListener('click', showNext);
    leftArrow.addEventListener('click', showPrev);
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
