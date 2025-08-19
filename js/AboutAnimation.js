document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.hhs-happy-section');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(section);
});


/// ///// // / // / / / / 

document.addEventListener("DOMContentLoaded", () => {
  const myFadeSection = document.querySelector(".myfade-section");

  if (!myFadeSection) return; // safety check

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-active");
        observer.unobserve(entry.target); // stop observing once visible
      }
    });
  }, observerOptions);

  observer.observe(myFadeSection);
});
