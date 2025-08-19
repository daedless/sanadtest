const counters = document.querySelectorAll('.count');
const slowSpeed = 4000;  // much slower speed for first two counters
const fastSpeed = 200;   // faster speed for last two counters
const slowDelay = 100;    // longer delay for slow counters (50ms)
const fastDelay = 20;    // shorter delay for fast counters (20ms)

const startCount = (counter, speed, delay) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/,/g, '');
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, delay);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCount();
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const index = Array.from(counters).indexOf(counter);
      if (index < 2) {
        // First two counters: much slower
        startCount(counter, slowSpeed, slowDelay);
      } else {
        // Last two counters: faster
        startCount(counter, fastSpeed, fastDelay);
      }
      observer.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});



 
