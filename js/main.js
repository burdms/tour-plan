$(document).ready(function () {
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
    autoHeight: true,

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

  // $(".newsletter").parallax({imageSrc: "../img/newsletter-background.jpg", speed: 0});

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
    document.querySelector("body").classList.toggle("overflow_hidden");
  });

  var modalButton = $(".booking-button");
  var closeModalButton = $(".modal__close");
  var closeOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeOverlay.on("click", closeModal);

  function openModal() {
    var body = $("body");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    body.addClass("overflow_hidden");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var body = $("body");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    body.removeClass("overflow_hidden");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      var body = $("body");
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      body.removeClass("overflow_hidden");
      modalOverlay.removeClass("modal__overlay_visible");
      modalDialog.removeClass("modal__dialog_visible");
    }
  });
});
