  const therapySlidesData = [
    {
      title: "العلاج الطبيعي في الماء",
      desc: "يساعد على تحسين حركة الجسم وتقوية العضلات باستخدام الماء كوسط علاجي."
    },
    {
      title: "علاج النطق واللغة",
      desc: "تعزيز قدرة الفرد على التواصل من خلال تحسين النطق واللغة، ويشمل الأكل والبلع."
    },
    {
      title: "العلاج الوظيفي",
      desc: "يعزز المهارات اليومية والاستقلالية باستخدام أنشطة موجهة ومناسبة لكل حالة."
    },
    {
      title: "العلاج الحسي",
      desc: "يساعد على تنظيم ردود الفعل الحسية لدى الأطفال الذين يعانون من اضطرابات حسية."
    },
    {
      title: "العلاج السلوكي",
      desc: "يعتمد على تعديل السلوكيات غير المرغوب بها باستخدام أساليب علمية مدروسة."
    }
  ];

  let therapyCurrentIndex = 0;
  const therapySlideElements = document.querySelectorAll('.therapy-slide');

  function updateTherapySlider() {
    const total = therapySlidesData.length;

    const visibleIndices = [
      (therapyCurrentIndex + 1) % total,
      therapyCurrentIndex % total,
      (therapyCurrentIndex - 1 + total) % total
    ];

    therapySlideElements.forEach((slide, i) => {
      const content = slide.querySelector('.therapy-slide-content');
      const item = therapySlidesData[visibleIndices[i]];

      slide.classList.toggle('active', i === 1);
      content.classList.remove('show');

      setTimeout(() => {
        content.innerHTML = i === 1
          ? `<h3>${item.title}</h3><p>${item.desc}</p>`
          : `<h3>${item.title}</h3>`;

        setTimeout(() => {
          content.classList.add('show');
        }, 30);
      }, 300);
    });
  }

  function goToNextTherapySlide() {
    therapyCurrentIndex = (therapyCurrentIndex + 1) % therapySlidesData.length;
    updateTherapySlider();
  }

  function goToPreviousTherapySlide() {
    therapyCurrentIndex = (therapyCurrentIndex - 1 + therapySlidesData.length) % therapySlidesData.length;
    updateTherapySlider();
  }

  window.onload = updateTherapySlider;




  /////////////////////////////////////////////



  
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll('.therapy-top-icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });

  icons.forEach(icon => observer.observe(icon));
});



