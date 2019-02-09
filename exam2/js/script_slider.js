$(document).ready(function(){
   $('.header_slider').slick({
      dots: true,
      infinite: true,
      speed: 4000,
      fade: true,
      cssEase: 'linear',
       arrows: false,
       autoplay: true,
   });
      $('.slider').slick({
       arrows: true,
       slidesToShow: 3,
       infinite: true,
       nextArrow: '._nextArrow',
        prevArrow: '._prevArrow',
   });
   
});