const gs_imagesByCategory = {
  events: [
    'assets/img/img1.jpg',
    'assets/img/img11.jpg',
    'assets/img/img12.jpg',
    'assets/img/img13.jpg',
    'assets/img/img14.jpg',
    'assets/img/img15.jpeg',
    'assets/img/img16.jpg',
    'assets/img/img17.jpg',
  ],
  treatments: [
    'assets/img/img15.jpeg',
    'assets/img/img16.jpg',
    'assets/img/img17.jpg',
    'assets/img/img18.jpeg',
    'assets/img/img1.jpg',
    'assets/img/img11.jpg',
    'assets/img/img12.jpg',
    'assets/img/img13.jpg',
  ],
  workshops: [
    'assets/img/img18.jpeg',
    'assets/img/img1.jpg',
    'assets/img/img13.jpg',
    'assets/img/img14.jpg',
    'assets/img/img15.jpeg',
    'assets/img/img16.jpg',
    'assets/img/img17.jpg',
    'assets/img/img11.jpg',
  ],
  center: [
    'assets/img/img11.jpg',
    'assets/img/img14.jpg',
    'assets/img/img15.jpeg',
    'assets/img/img16.jpg',
    'assets/img/img17.jpg',
    'assets/img/img18.jpeg',
    'assets/img/img1.jpg',
    'assets/img/img12.jpg',
  ]
};

const gs_gallery = document.getElementById('gs_gallery');
const gs_modal = document.getElementById('gs_modal');
const gs_modalImg = document.getElementById('gs_modalImg');
const gs_closeBtn = document.getElementById('gs_closeBtn');
const gs_prevBtn = document.getElementById('gs_prevBtn');
const gs_nextBtn = document.getElementById('gs_nextBtn');
const gs_buttons = document.querySelectorAll('.gs_bottom-buttons a');

let gs_currentIndex = 0;
let gs_currentImages = gs_imagesByCategory['events']; // default category

// Intersection Observer for animations
const gs_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('gs_visible');
      gs_observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

function gs_observeAnimations() {
  document.querySelectorAll('.gs_animate-fade-in:not(.gs_visible), .gs_animate-scale-in:not(.gs_visible)').forEach(el => {
    gs_observer.observe(el);
  });
}

function gs_loadGalleryImages(category) {
  gs_currentImages = gs_imagesByCategory[category];
  gs_gallery.innerHTML = '';
  gs_currentImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${category} image ${index + 1}`;
    img.classList.add('gs_animate-scale-in'); // animation class for images
    img.addEventListener('click', () => {
      gs_openModal(index);
    });
    gs_gallery.appendChild(img);
  });
  gs_observeAnimations();
}

function gs_openModal(index) {
  gs_currentIndex = index;
  gs_modal.style.display = 'flex';
  gs_modalImg.src = gs_currentImages[gs_currentIndex];
}

function gs_closeModal() {
  gs_modal.style.display = 'none';
}

function gs_showPrev() {
  gs_currentIndex = (gs_currentIndex - 1 + gs_currentImages.length) % gs_currentImages.length;
  gs_modalImg.src = gs_currentImages[gs_currentIndex];
}

function gs_showNext() {
  gs_currentIndex = (gs_currentIndex + 1) % gs_currentImages.length;
  gs_modalImg.src = gs_currentImages[gs_currentIndex];
}

// Initialize gallery
gs_loadGalleryImages('events');

// Buttons click handlers
gs_buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    gs_buttons.forEach(b => b.classList.remove('gs_active'));
    btn.classList.add('gs_active');
    const category = btn.getAttribute('data-category');
    gs_loadGalleryImages(category);
  });
});

gs_closeBtn.addEventListener('click', gs_closeModal);
gs_prevBtn.addEventListener('click', gs_showPrev);
gs_nextBtn.addEventListener('click', gs_showNext);

// Close modal on clicking outside image
gs_modal.addEventListener('click', e => {
  if (e.target === gs_modal) {
    gs_closeModal();
  }
});

// Observe static animations on page load
gs_observeAnimations();
