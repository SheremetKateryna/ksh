var map = null;
  function createMap() {
    var loc = {lat: 40.668454, lng: -73.909620};
    var mark = {lat: 40.697623, lng: -73.897294};
      map = new google.maps.Map(document.querySelector('._map'), {
           zoom: 12, 
           center: loc
         });
    var marker = new google.maps.Marker({
                position: mark, 
                map: map,
         });
  }