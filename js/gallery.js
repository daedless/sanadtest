const gallerySliderTrack = document.getElementById('gallerySliderTrack');
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryTotalSlides = gallerySlides.length;
const galleryVisibleSlides = 3;
let galleryCurrentIndex = 0;
let galleryAutoInterval;

let galleryUserInteractionTimeout;

function galleryUpdateSliderPosition() {
  const slideWidth = gallerySlides[0].offsetWidth;
  gallerySliderTrack.style.transform = `translateX(-${galleryCurrentIndex * slideWidth}px)`;
}

function galleryUserInteracted() {
  // Stop auto sliding immediately
  galleryStopAutoSliding();

  // Clear any existing timeout
  if (galleryUserInteractionTimeout) clearTimeout(galleryUserInteractionTimeout);

  // Restart auto sliding after 5 seconds of no interaction
  galleryUserInteractionTimeout = setTimeout(() => {
    galleryStartAutoSliding();
  }, 5000);
}

function galleryGoToNextSlide() {
  if (galleryCurrentIndex < galleryTotalSlides - galleryVisibleSlides) {
    galleryCurrentIndex++;
  } else {
    galleryCurrentIndex = 0;
  }
  galleryUpdateSliderPosition();
  galleryUserInteracted();
}

function galleryGoToPrevSlide() {
  if (galleryCurrentIndex > 0) {
    galleryCurrentIndex--;
  } else {
    galleryCurrentIndex = galleryTotalSlides - galleryVisibleSlides;
  }
  galleryUpdateSliderPosition();
  galleryUserInteracted();
}

function galleryStartAutoSliding() {
  galleryAutoInterval = setInterval(() => {
    galleryGoToNextSlide();
  }, 5000);
}

function galleryStopAutoSliding() {
  clearInterval(galleryAutoInterval);
}

window.addEventListener('load', () => {
  galleryUpdateSliderPosition();
  galleryStartAutoSliding();
});

document.querySelector('.gallery-slider-container').addEventListener('mouseover', galleryStopAutoSliding);
document.querySelector('.gallery-slider-container').addEventListener('mouseout', galleryStartAutoSliding);

window.addEventListener('resize', galleryUpdateSliderPosition);

// Fade-in animation on scroll for gallery container and any other fade-in elements
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in-element, .fade-in-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
