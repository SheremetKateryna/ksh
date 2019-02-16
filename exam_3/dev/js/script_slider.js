    $(document).ready(function(){
      $('.team-slider').slick({
        dots: false,
       slidesToShow: 3,
       infinite: true,
       speed: 3000,
       autoplay: true,
       arrows: false,
      });
            $('.work-slider').slick({
        dots: false,
        // nextArrow: '._nextArrow',
        // prevArrow: '._prevArrow',
       slidesToShow: 1,
       arrows: false,
       infinite: true,
       speed: 3000,
       autoplay: true,
      });
    });

