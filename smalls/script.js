(function() {
  
  var slideContainer = $('.slide-container');
  
  slideContainer.slick();
  
  $('.small-hub__image img').hide();
  $('.slick-active').find('.small-hub img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.small-hub img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.small-hub img').fadeIn(200);
  });
  
})();