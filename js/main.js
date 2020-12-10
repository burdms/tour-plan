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

  let map_container = document.getElementById("map-container");
  let options_map = {
    once: true,
    passive: true,
    capture: true,
  };
  map_container.addEventListener("click", start_lazy_map, options_map);
  map_container.addEventListener("mouseover", start_lazy_map, options_map);
  map_container.addEventListener("touchstart", start_lazy_map, options_map);
  map_container.addEventListener("touchmove", start_lazy_map, options_map);

  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById("gmap_lazy");
      map_loaded = true;
      map_block.setAttribute("src", map_block.getAttribute("data-src"));
      map_block.removeAttribute("data-src");
      console.log("GMAP LOADED");
    }
  }

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
    document.querySelector("body").classList.toggle("overflow_hidden");
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  var closeOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeOverlay.on("click", closeModal);

  var body = $("body");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  function openModal() {
    var targetModal = $(this).attr("data-href");
    body.addClass("overflow_hidden");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
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

  AOS.init({ disable: "mobile" });
});
