
///// Offer script /////////

// Modal open function
function offersOpenModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Modal close function
function offersCloseModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside modal content
window.addEventListener('click', function(event) {
  const offersModals = document.querySelectorAll('.offers-modal');
  offersModals.forEach(modal => {
    if (event.target === modal) modal.style.display = 'none';
  });
});

// Animate .offers-container on scroll into view
document.addEventListener("DOMContentLoaded", () => {
  const offersSection = document.querySelector('.offers-container');

  if (!offersSection) return; // Safety check

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        offersSection.classList.add('visible');
        observer.unobserve(offersSection); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(offersSection);
});




    
//////// Our Story script ////////





    // Open and show modal with animated paragraphs
  function openModal() {
    const modal = document.getElementById('storyModal');
    modal.classList.add('active');

    const paragraphs = modal.querySelectorAll('.story-paragraphs p');
    paragraphs.forEach((p, index) => {
      setTimeout(() => {
        p.classList.add('visible');
      }, index * 500);
    });
  }

  // Close and reset modal
  function closeModal() {
    const modal = document.getElementById('storyModal');
    modal.classList.remove('active');

    const paragraphs = modal.querySelectorAll('.story-paragraphs p');
    paragraphs.forEach(p => {
      p.classList.remove('visible');
    });
  }

  // Fade-in animation on scroll
  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in-element');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
  });





    
