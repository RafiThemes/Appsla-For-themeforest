$(function ($) {
  "use strict";


  /* Custom menu Js */

  $(".menu .nav-itemm .nav-linkk").on("click", function (event) {
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


  /* Dark ToggleClass Class Add */
  $('.switcher').on('click', function () {
    $('body').toggleClass('darktheme');
    $('.switcher').toggleClass('active');
  });

  /* Search Bar  */
  $('.search-icon').on('click', function () {
    $('.search-form').addClass('opened');
  });

  $('.search-close').on('click', function () {
    $('.search-form').removeClass('opened');
  });

  $('.dropdown-menu-parent').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.mobile-toggler').on('click', function () {
    $('.menu-box').removeClass('active');
  });

  $('.toggler-buttonn').on('click', function () {
    $(this).toggleClass('active');
    $('.menu-box').toggleClass('active');
  });

  $('.mobile-toggler').on('click', function () {
    $('.menu-box').removeClass('active');
    $('.toggler-buttonn').removeClass('active');
  });
 

  var header = $("#menu");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 1) {
      header.removeClass("nav-fixed");
    } else {
      header.addClass("nav-fixed");
    }
  });


  /*  Active Class Add */
  $('.mein-menu .nav-item').on('click', function () {
    $('.nav-item').removeClass('dropadd');
    $(this).toggleClass('dropadd');
  });

  $('.tabs').tabs({
    neighbors: {
      prev: $('button.prev'),
      next: $('button.next')
    }
  });


  /* === partnerBox Slider ==== */
  var $partnerBox = $(".partner-box");
  $partnerBox.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    autoplay: false,
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



