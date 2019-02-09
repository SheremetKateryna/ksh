$(function(){
       $('._scroll').on('click',function(){
         $('html').animate({
           scrollTop: $('._scrollTo').offset().top - 50 
         }, 5000)
       });
       $('.project_scroll').on('click',function(){
         $('html').animate({
           scrollTop: $('.project_scrollTo').offset().top - 50
         }, 5000)
       });
       $('.news_scroll').on('click',function(){
         $('html').animate({
           scrollTop: $('.news_scrollTo').offset().top
         }, 5000)
       });
       $('.contact_scroll').on('click',function(){
         $('html').animate({
           scrollTop: $('.contact_scrollTo').offset().top - 300
         }, 5000)
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