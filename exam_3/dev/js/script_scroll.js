$(function(){
    $('._scrollLink').on('click', function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 2500);
  });
});