(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const categoryTops = document.querySelectorAll(".category__top");

categoryTops.forEach(top =>
  top.addEventListener("click", function() {
    const backgroundImg = this.querySelector(".backgroundImg");
    const category = this.parentElement;
    const dropdown = category.querySelector(".dropdown");
    const menu = category.querySelector(".category__menu");

    category.style.height = "auto";
    category.style.overflow = "hidden";

    backgroundImg.classList.toggle("backgroundImg__display");
    dropdown.classList.toggle("rotate"); // rotate dropdown button
    menu.classList.toggle("expand"); // expand categories menu
  })
);

},{}],2:[function(require,module,exports){
const expand = require("./expand");
const showMap = require("./map");
const slideSideNav = require("./sideNav");

},{"./expand":1,"./map":3,"./sideNav":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
const sideNav = document.querySelector('.side-nav');
const menuBars = document.querySelector('.nav-menu');
const exit = document.querySelector('.side-nav__exit');

menuBars.addEventListener('click', () => sideNav.classList.toggle("slide__side-nav"));
exit.addEventListener('click', () => sideNav.classList.toggle("slide__side-nav"));

},{}]},{},[2]);
