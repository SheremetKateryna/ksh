$(function(){
    $('._scrollLink').on('click', function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 2500);
});
     });

































   // script.
   //     $(function(){
   //     $('.about-us_scroll').on('click',function(){
   //     var n = $('._scrollToAbout').offset().top;
   //     $('html').animate({
   //     scrollTop: $('._scrollToAbout').offset().top}, 2000);
   //     });
   //     });
   // script.
   //     $(function(){
   //     $('.project_scroll').on('click',function(){
   //     var n = $('._scrollToProject').offset().top;
   //     $('html').animate({
   //     scrollTop: $('._scrollToProject').offset().top}, 2000);
   //     });
   //     });
   // script.
   //     $(function(){
   //     $('.news_scroll').on('click',function(){
   //     var n = $('._scrollToNews').offset().top;
   //     $('html').animate({
   //     scrollTop: $('._scrollToNews').offset().top}, 2000);
   //     });
   //     });
   // script.
   //     $(function(){
   //     $('.contact_scroll').on('click',function(){
   //     var n = $('._scrollToContact').offset().top;
   //     $('html').animate({
   //     scrollTop: $('._scrollToContact').offset().top}, 2000);
   //     });
   //     });