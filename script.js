gsap.registerPlugin(ScrollTrigger);

// header
// 헤더 사라지고 생기기
const group = document.querySelector('.top-bar');
console.log(group.offsetWidth);

let lastScrollTop = 0;
const header = document.querySelector('.top-bar');
const threshold = 50; // 스크롤이 이 정도 이상 내려가야 반응
const minScrollDelta = 5; // 변화폭 민감도 ↑

window.addEventListener('scroll', function () {
  const currentScroll = window.scrollY;
  const delta = Math.abs(currentScroll - lastScrollTop);

  if (delta < minScrollDelta) return;

  if (currentScroll > lastScrollTop && currentScroll > threshold) {
    header.classList.add('hide-header');
  } else if (currentScroll < lastScrollTop) {
    header.classList.remove('hide-header');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


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
  on: {
    init: function () {
      this.slideToLoop(0, 0); // ✅ 1번 슬라이드부터 시작
    },
  },
});

// sec-5
let sec_5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-5",       
    start: "top 20%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

sec_5.to(".sec-5_text-box", {
  y: '0%',
  duration: 4,
  opacity: 1,
});

// sec-6
var swiper = new Swiper(".mySwiper-4", {
  effect: "fade",
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 4,
    disableOnInteraction: false,
  },
});


// sec-7
var swiper = new Swiper(".mySwiper-3", {
  slidesPerView: 6,
  spaceBetween: 45,
  loop: true,
  freeMode: true,
  speed: 10000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});