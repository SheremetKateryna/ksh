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
      $('.slider_news').slick({
       dots: true,
       slidesToShow: 3,
       infinite: true,
       speed: 3000,
       autoplay: true,
       arrows: false,
       // nextArrow: '._nextArrow',
       // prevArrow: '._prevArrow',
   });
   
});