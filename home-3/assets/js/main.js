$(function ($) {
  "use strict";

  $(".mein-menu .nav-item .nav-link").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 80,
        },
        500
      );
    event.preventDefault();
  });

  /* Sticky Header */ 
  var header = $("#mein-menu");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 1) {
      header.removeClass("nav-fixed");
    } else {
      header.addClass("nav-fixed");
    }
  });

  /* Dropdown toggleClass Add */
  $('.dropdown-mega').on('click', function () {
    $(this).toggleClass('dropdownn');
  });

  /*  Active Class Add */
  $('.mein-menu .nav-item').on('click', function () {
    $('.nav-item').removeClass('dropadd');
    $(this).toggleClass('dropadd');
  });

  $('.mein-menu .navbar-toggler').on('click', function () { 
    $('.mein-menu').toggleClass('active');
  });

  /* Dark ToggleClass Class Add */
  $('.darklight').on('click', function () {
    $('body').toggleClass('darktheme');
    $('.darklight').toggleClass('dark');
  });
 

  /* Magnific Popup Video Activition */
  $(".popup").magnificPopup({
    type: "video",
  });

  /* === reviewBox Slider ==== */
  var $reviewBox = $(".review-box");
  $reviewBox.owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    autoplay: false,
    items: 1
  });

  /* === Membership Slider Slider ==== */
  var $membershipSlider = $(".membership-slider");
  $membershipSlider.owlCarousel({
    loop: true,
    nav: true,
    center: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    autoplay: false,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1199: {
        items: 3,
      },
    }
  });
 
  /* Counter Activition */
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
 
  /* Wow js */
  new WOW().init();

  /* Bottom to Top Scroll */
  var ScrollTop = $(".scrollToTop");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
      ScrollTop.removeClass("active");
    } else {
      ScrollTop.addClass("active");
    }
  });

  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(window).on("load", function () {
    /*Preloader*/
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });

});



