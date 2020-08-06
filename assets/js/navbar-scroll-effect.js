// Scrolling Effect

function controlNavbarColor() {
  if ($(window).scrollTop() > 0.75 * window.innerHeight) {
    $('header nav').addClass('black-navbar');
  } else {
    $('header nav').removeClass('black-navbar');
  }
}

$(window).on("scroll", function() {
  controlNavbarColor();
})

$(document).ready(function() {
  controlNavbarColor();
})

$("header nav .navbar-collapse a.dropdown-item").click(function() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    $('.navbar-toggler').click();
  }
})
