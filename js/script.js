document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector(".contactbody");

  // Get background image URL from CSS
  const bgImage = getComputedStyle(body).backgroundImage;
  const match = bgImage.match(/url\(["']?(.*?)["']?\)/);

  function revealContent() {
    // Add a slight delay for a cinematic feel
    setTimeout(() => {
      body.classList.add("loaded");
    }, 150); // 150ms delay
  }

  if (match && match[1]) {
    const img = new Image();
    img.src = match[1];

    img.onload = revealContent;
    img.onerror = revealContent; // still reveal if image fails
  } else {
    revealContent();
  }
});
