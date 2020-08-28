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

if ('IntersectionObserver' in window) {
  let navObserver = new IntersectionObserver(controlNavbarColor, options);
  let target = document.querySelector('.hero-content .mx-auto')
  navObserver.observe(target)
} else {
  $('header nav').addClass('black-navbar');
}

function fadeIn(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animatedFadeInUp");
      observer.unobserve(entry.target);
    }
  });
}

let fadeInOptions = {
  threshold: 0.25
};

if ('IntersectionObserver' in window) {
  let fadeInObserver = new IntersectionObserver(fadeIn, fadeInOptions);
  let fadeInTargets = document.querySelectorAll('.toFadeIn');
  fadeInTargets.forEach(target => fadeInObserver.observe(target));
} else {
  $('.toFadeIn').addClass('animatedFadeInUp')
}
