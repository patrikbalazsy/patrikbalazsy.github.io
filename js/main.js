document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('.contactbody');
  if (!body) return;

  // Get background image URL from CSS
  const bgImage = getComputedStyle(body).backgroundImage;
  const match = bgImage.match(/url\(["']?(.*?)["']?\)/);

  function revealContent() {
    // Add a slight delay for aesthetics
    setTimeout(() => {
      body.classList.add('loaded');
    }, 150);
  }

  if (match && match[1]) {
    const img = new Image();
    img.src = match[1];

    img.onload = revealContent;
    img.onerror = revealContent;
  } else {
    revealContent();
  }
});
