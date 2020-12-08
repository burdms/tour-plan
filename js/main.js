$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    effect: "fade",

    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    effect: "slide",
    autoHeight: true,

    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

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
  }

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

  var body = $("body");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  function openModal() {
    body.addClass("overflow_hidden");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    body.removeClass("overflow_hidden");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      body.removeClass("overflow_hidden");
      modalOverlay.removeClass("modal__overlay_visible");
      modalDialog.removeClass("modal__dialog_visible");
    }
  });

  $(".footer__input_phone").mask("+7 (999) 999-99-99");
  $(".modal__input_phone").mask("+7 (999) 999-99-99");

  $(".modal__form").validate({
    messages: {
      name: "Please specify your name",
      phone: {
        required: "Example: +7 (999) 999-99-99",
        minlength: "Example: +7 (999) 999-99-99",
      },
      email: {
        required: "Example: name@domain.com",
        email: "Example: name@domain.com",
      },
    },
  });

  $(".newsletter__subscribe").validate({
    errorClass: "error_newsletter",
    messages: {
      email: {
        required: "Example: name@domain.com",
        email: "Example: name@domain.com",
      },
    },
  });

  $(".footer__form").validate({
    messages: {
      name: "Please specify your name",
      phone: {
        required: "Example: +7 (999) 999-99-99",
        minlength: "Example: +7 (999) 999-99-99",
      },
    },
  });

  AOS.init();
});
