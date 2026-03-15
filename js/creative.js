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

  if (!lightbox || !lightboxImg || images.length === 0) return;

  const openLightbox = (index) => {
    const img = images[index];
    if (!img) return;

    currentIndex = index;
    lightboxImg.src = img.src;
    lightboxTitle.textContent = img.dataset.title || '';
    lightboxCaption.innerHTML = img.dataset.caption || '';
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  const showNext = () => openLightbox((currentIndex + 1) % images.length);
  const showPrev = () => openLightbox((currentIndex - 1 + images.length) % images.length);

  images.forEach((img, index) => {
    img.style.animationDelay = `${(index + 1) * 0.1}s`;
    img.addEventListener('click', () => openLightbox(index));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  rightArrow?.addEventListener('click', showNext);
  leftArrow?.addEventListener('click', showPrev);

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
