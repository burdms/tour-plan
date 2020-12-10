$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
    document.querySelector("body").classList.toggle("overflow_hidden");
  });

  $(".footer__input_phone").mask("+7 (999) 999-99-99");

  $(".footer__form").validate({
    messages: {
      name: "Please specify your name",
      phone: {
        required: "Example: +7 (999) 999-99-99",
        minlength: "Example: +7 (999) 999-99-99",
      },
    },
  });
});
