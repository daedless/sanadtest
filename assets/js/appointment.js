document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.section-wrapper');
  const star = section.querySelector('.star');
  const womanImage = section.querySelector('.woman-image');
  const form = section.querySelector('.appointment-form');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class in sequence using timeouts
        star.classList.add('visible');

        setTimeout(() => {
          womanImage.classList.add('visible');
        }, 400); // 400ms delay after star

        setTimeout(() => {
          form.classList.add('visible');
        }, 800); // 800ms delay after star, 400ms after image

        obs.unobserve(section); // only run once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});
