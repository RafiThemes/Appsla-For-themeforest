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
  if($(window).width() > 991) {
    var header = $("#mein-menu");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("animated fadeInDown");
      } else {
        header.addClass("animated fadeInDown");
      }
    });
  }
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

  /* Price-switch toggleClass Add */
  $('.pricing .price-switch').on('click', function () {
    $('.toggle-box').toggleClass('active');
    $('.pricing-box').toggleClass('active');
  });


  /* === partnerBox Slider ==== */
  var $partnerBox = $(".partner-box");
  $partnerBox.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        margin: 30
      },
      768: {
        items: 3,
        margin: 40
      },
      992: {
        items: 4,
        margin: 60
      },
      1199: {
        items: 5,
        margin: 80
      },
    }
  });


  /* === Testomonial Slider ==== */
  var $testomonialBox = $(".testomonial-box");
  $testomonialBox.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1200,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 0,
    responsive: { 
      0: {
        items: 1, 
      },
      375: {
        items: 1, 
      },
      768: {
        items: 2, 
      },
      992: {
        items: 3, 
      },
      1399: {
        items: 4, 
      },
    }
  });

  /* Dark ToggleClass Class Add */
  $('.darklight').on('click', function () {
    $('body').toggleClass('darktheme');
    $('.darklight').toggleClass('dark');
  });
 

  // Change the second argument to your options: 
  const player = new Plyr('video', { captions: { active: true } });
  window.player = player;


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