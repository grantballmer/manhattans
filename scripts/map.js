if (typeof google !== "undefined") {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(41.65753271412772, -83.54384925),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.65753271412772, -83.54384925),
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  });

  marker.setMap(map);

  window.onresize = function() {
    const currCenter = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(currCenter);
  };
}
