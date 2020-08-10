// Scrolling Effect

function controlNavbarColor() {
  if ($(window).scrollTop() > 1/5 * window.innerHeight) {
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
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('.navbar-toggler').click();
  }
})

$("#arrows").click(function() {
  console.log("hi");
  $('html').animate({
    scrollTop: $('.header').prop("scrollHeight")
  });
  return false;
})
