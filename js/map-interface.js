var map;
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.6769, lng: -122.4597},
    zoom: 15
  });
}


$(document).ready(function(){
  initMap();
  $("form#search").submit(function(event){
    event.preventDefault();
    var userSearch = $("input#search-box").val();
    $.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAEc12j5uuNs9ioaNkCITCBeVCvE0Qcg-4&q=Folsom,CA").then(function(response){
      console.log(response);
    });

  });
});
