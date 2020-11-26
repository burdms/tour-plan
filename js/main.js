var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  // Keyboard swiping
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  effect: "slide",
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
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
          hintContent: "Phuket Banthai Resort",
          balloonContentHeader: "DoubleTree by Hilton",
          balloonContentBody: "Phuket Banthai Resort",
        },
      },
      {
        iconColor: "#1faee9",
      }
    );

  myMap.geoObjects.add(myGeoObject);
  // .add(
  //   new ymaps.Placemark(
  //     [7.89074638, 98.29473329],
  //     {
  //       balloonContent: "DoubleTree by Hilton Phuket Banthai Resort",
  //     },
  //     {
  //       preset: "islands#blueHotelIcon",
  //     }
  //   )
  // );
}

// var image = document.getElementsByClassName("newsletter");
// new simpleParallax(image, {
//   scale: 1.5,
// });

$(".newsletter").parallax({
  imageSrc: "../img/newsletter-background.jpg",
  speed: 0,
  androidFix: false,
  iosFix: false,
});
