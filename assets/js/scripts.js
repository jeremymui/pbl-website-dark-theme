$("header nav .navbar-collapse a.dropdown-item").click(function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('.navbar-toggler').click();
  }
})

$("#arrows").click(function() {
  $('html').animate({
    scrollTop: $('.header').prop("scrollHeight")
  });
  return false;
})


let options = {
    rootMargin: "-70px", //max navbar height
    threshold: 1.0
}

function controlNavbarColor(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $('header nav').removeClass('black-navbar');
    } else {
      $('header nav').addClass('black-navbar');
    }
  });
}

let navObserver = new IntersectionObserver(controlNavbarColor, options);
let target = document.querySelector('.hero-content .mx-auto')
navObserver.observe(target)
