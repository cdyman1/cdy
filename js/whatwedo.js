const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: "top 50%",
    end: "bottom -20%",
    markers: false,
  })
})


// 이미지 슬라이드
var SiSlide = new Swiper(".teamBox-container", {
  slidesPerView : 1,
  loop: false,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 'auto',
      allowTouchMove: true,
    },
  }
});

// 에이전시 슬라이드
var agencySlide = new Swiper(".agency_container", {
  slidesPerView : 3,
  spaceBetween : 35,
  loop: false,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
      loop: true,
      allowTouchMove: true,
    },
  }
});

// 경험 슬라이드
var DesignSlide = new Swiper(".w3_container", {
  slidesPerView : 5,
  spaceBetween : 100,
  loop: false,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
      loop: true,
      allowTouchMove: true,
    },
  }
});
