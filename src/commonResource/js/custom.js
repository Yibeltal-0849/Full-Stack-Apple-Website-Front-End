import $ from "jquery"; // If jQuery is installed via npm

$(document).ready(function () {
  $("head").append(
    '<style>.footer-links-wrapper h3.open:after { content: "\\f00d"; }</style>'
  );

  function showAndHide() {
    const isMobile = $(window).width() <= 768;
    $(".footer-links-wrapper h3").off("click");

    if (isMobile) {
      $(".footer-links-wrapper h3").on("click", function () {
        $(this).toggleClass("open").next("ul").slideToggle();
      });
    } else {
      $(".footer-links-wrapper h3").removeClass("open");
      $(".footer-links-wrapper ul").removeAttr("style");
    }
  }

  showAndHide();
  $(window).on("resize", showAndHide);
});
