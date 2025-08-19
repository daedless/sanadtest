  const testimonialWrapper = document.getElementById('testimonial-wrapper');
  const totalTestimonialSlides = testimonialWrapper.children.length;
  let testimonialIndex = 0;

  function updateTestimonialSlider() {
    testimonialWrapper.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  }

  function nextTestimonialSlide() {
    testimonialIndex = (testimonialIndex + 1) % totalTestimonialSlides;
    updateTestimonialSlider();
  }

  function prevTestimonialSlide() {
    testimonialIndex = (testimonialIndex - 1 + totalTestimonialSlides) % totalTestimonialSlides;
    updateTestimonialSlider();
  }

  // Auto-slide every 5 seconds
  setInterval(nextTestimonialSlide, 5000);
