;(function($){
   "use strict";
   $(window).load(function(){
        var uluru = {lat: -25.344, lng: 131.036};
        var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
      // var map;
      // var mapContainer = $('._map')[0];
      // var mapCenter = {lat: 47.815049, lng: 35.174411};
      // map = new google.maps.Map(document.getElementById('_map'), { 
      //      zoom: 16, 
      //      center: mapCenter
        // });
      // var marker = new google.maps.Marker({
      //      position: loc,
      //      map: worldMap,
      //      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Japan_small_icon.png'
      //   });
      // var infoWindow = new google.maps.InfoWindow({
      //      content: 'position',
      //   });
   });
})(jQuery);



