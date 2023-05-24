function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.5895824, lng: -85.8497361},
    zoom: 15
  });

  var markers = [
    {lat: 41.5895824, lng: -85.8497361, title: 'A&R Services'}
  ];

  markers.forEach(function(marker) {
    new google.maps.Marker({
      position: {lat: marker.lat, lng: marker.lng},
      map: map,
      title: marker.title
    });
  });
}
