var swiper = new Swiper(".swiper-container", {

  speed: 1000,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 5,
  autoHeight: true,
  initialSlide: 2,
  
  // loopPreventsSlide: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 150,
    depth: 250,
    modifier: 1,
    slideShadows: true, 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
      // grabCursor: true,
    },

    576: {
      slidesPerView: "auto",
      spaceBetween: 20,
      // direction: 'vertical',
      navigation: false,
      pagination: false,

    }
  }
  

});
 



