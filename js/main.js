var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Keyboard swiping
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
