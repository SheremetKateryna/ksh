    $(document).ready(function(){
      $('.team-slider').slick({
        dots: false,
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        nextArrow: '._nextArrowTeam',
        prevArrow: '._prevArrowTeam',
      });

      $('.work-slider').slick({
        dots: true,
        nextArrow: '._nextArrow',
        prevArrow: '._prevArrow',
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        speed: 3000,
      });
    });

