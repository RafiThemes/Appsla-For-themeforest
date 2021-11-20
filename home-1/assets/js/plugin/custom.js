 

jQuery(document).ready(function ($) {
  var feedbackSlider = $(".feedback-slider");
  feedbackSlider.owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 4000,
    loop: true,
    mouseDrag: true,
    touchDrag: true
  });

  feedbackSlider.on("translate.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .removeClass("animated fadeIn")
      .css("opacity", "0");
    $(".feedback-slider-item img, .feedback-slider-thumb img")
      .removeClass("animated zoomIn")
      .css("opacity", "0");
  });

  feedbackSlider.on("translated.owl.carousel", function () {
    $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
    $(".feedback-slider-item img, .feedback-slider-thumb img")
      .addClass("animated zoomIn")
      .css("opacity", "1");
  });
  feedbackSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("img")
      .attr("src");
    var nextThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("img")
      .attr("src");
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("span")
      .attr("data-rating");
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("span")
      .attr("data-rating");
    $(".thumb-prev").find("img").attr("src", prevThumb);
    $(".thumb-next").find("img").attr("src", nextThumb);
    $(".thumb-prev")
      .find("span")
      .next()
    $(".thumb-next")
      .find("span")
      .next()
  });
  $(".thumb-next").on("click", function () {
    feedbackSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    feedbackSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
}); //end ready