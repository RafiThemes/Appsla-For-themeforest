(function ($) {
    "use strict";

    
   $(".menu .menu-list li a").on("click", function (event) {
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
    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });

    
}(jQuery));
