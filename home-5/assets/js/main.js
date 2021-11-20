$(function ($) {
  "use strict";


  $(".mein-menu .nav-item .nav-link").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate({
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

  /* Dark ToggleClass Class Add */
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

  /* === partnerBox Slider ==== */
  var $partnerBox = $(".partner-box");
  $partnerBox.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    autoplay: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1199: {
        items: 5,
      },
    }
  });

  /* === Blog Slider ==== */
  var $blogBox = $(".blog-box");
  $blogBox.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    autoplay: false,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
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

 