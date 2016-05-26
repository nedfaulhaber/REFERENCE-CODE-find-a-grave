var map;
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.6769, lng: -122.4597},
    zoom: 15
  });
}


$(document).ready(function(){
  initMap();
});
