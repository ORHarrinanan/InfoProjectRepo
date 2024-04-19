var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 500,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
      spaceBetween: 300,
      slidesPerView: 2,
    },
      520: {
        spaceBetween: 300,
        slidesPerView: 2,
      },
    950:{
      spaceBetween: 500,
      slidesPerView: 3,
    },
  }
});