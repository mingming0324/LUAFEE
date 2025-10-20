// main
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
   loop: true, // 🔹 반복 재생 (필요 시)
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// sec-1

var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  observer: true,
  observeParents: true,
  on: {
    init: function () {
      this.slideToLoop(0, 0); // ✅ 1번 슬라이드부터 시작
    },
  },
});