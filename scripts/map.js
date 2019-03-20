// function createMap() {
//   // const container = document.querySelector('.contact-container');
//   const map = document.querySelector("#map");

//   if (map) {
//     const width = map.clientWidth;
//     const height = map.clientHeight;
//     const image = map.querySelector('.map-image');
//     image.src = ` https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDIIpzl-n53bcLuPEv5Z0U9IbQr4prIWcI&center=41.65753271412772,-83.54384925&zoom=16&markers=color:blue%7C%7C41.65753271412772,-83.54384925&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:geometry.fill%7Ccolor:0xd3d3d3%7Cweight:5.5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=${width}x${height + 100}`;
//   }
//   //image.src = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDIIpzl-n53bcLuPEv5Z0U9IbQr4prIWcI&center=41.65753271412772,-83.54384925&zoom=16&markers=color:blue%7C%7C41.65753271412772,-83.54384925&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575%7Cvisibility:off&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.business%7Celement:labels.icon%7Ccolor:0x0000ff&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=${width}x${height + 100}`;
// }

// createMap();

// const width = window.innerWidth || document.body.clientWidth;
// const height = window.innerHeight || document.body.clientHeight;

// console.log(map.clientHeight, map.clientWidth);

if (typeof google !== "undefined") {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(41.65753271412772, -83.54384925),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * use google maps api built-in mechanism to attach dom events
   */
  google.maps.event.addDomListener(window, "load", function() {
    /*
     * create infowindow (which will be used by markers)
     */
    const infoWindow = new google.maps.InfoWindow();

    /*
     * marker creater function (acts as a closure for html parameter)
     */
    function createMarker(options, html) {
      var marker = new google.maps.Marker(options);
      if (html) {
        google.maps.event.addListener(marker, "click", function() {
          infoWindow.setContent(html);
          infoWindow.open(options.map, this);
        });
      }
      return marker;
    }

    /*
     * add markers to map
     */
    const marker1 = createMarker({
      position: new google.maps.LatLng(33.808678, -117.918921),
      map: map,
      icon:
        "https://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
    });
  });

  // listen for the window resize event & trigger Google Maps to update too
  window.onresize = function() {
    const currCenter = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(currCenter);
  };
}
