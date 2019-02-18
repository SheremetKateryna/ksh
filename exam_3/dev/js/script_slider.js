    $(document).ready(function(){
      $('.team-slider').slick({
        dots: false,
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        nextArrow: '._nextArrowTeam',
        prevArrow: '._prevArrowTeam',
        responsive: [{
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
         }
       }]
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

