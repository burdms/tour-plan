var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Keyboard swiping
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [7.89074638, 98.29473329],

        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myGeoObject = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [7.89074638, 98.29473329],
        },
        properties: {
          iconContent: "DoubleTree",
          hintContent: "Phuket Banthai Resort",
        },
      },
      {
        preset: "islands#blackStretchyIcon",
      }
    );

  myMap.geoObjects.add(myGeoObject);
}
