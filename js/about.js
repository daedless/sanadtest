const hhsSliderTrack = document.getElementById('hhs-sliderTrack');
const hhsPrevBtn = document.getElementById('hhs-prevBtn');
const hhsNextBtn = document.getElementById('hhs-nextBtn');

let hhsCurrentIndex = 0;
let hhsAutoSlideTimer;

const hhsMoveSlider = () => {
  const slideWidth = hhsSliderTrack.children[0].offsetWidth + 15;
  hhsSliderTrack.style.transform = `translateX(${-hhsCurrentIndex * slideWidth}px)`;
};

const hhsResetAutoSlide = () => {
  clearInterval(hhsAutoSlideTimer);
  hhsAutoSlideTimer = setInterval(() => {
    hhsCurrentIndex++;
    if (hhsCurrentIndex > hhsSliderTrack.children.length - 3) {
      hhsCurrentIndex = 0;
    }
    hhsMoveSlider();
  }, 4000);
};

hhsNextBtn.addEventListener('click', () => {
  hhsCurrentIndex++;
  if (hhsCurrentIndex > hhsSliderTrack.children.length - 3) {
    hhsCurrentIndex = 0;
  }
  hhsMoveSlider();
  hhsResetAutoSlide();
});

hhsPrevBtn.addEventListener('click', () => {
  hhsCurrentIndex--;
  if (hhsCurrentIndex < 0) {
    hhsCurrentIndex = hhsSliderTrack.children.length - 3;
  }
  hhsMoveSlider();
  hhsResetAutoSlide();
});

hhsResetAutoSlide();
