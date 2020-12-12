/*global $*/
$(function () {
  "use strict";

  $(".tab-switch li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".tab-section .tab-content > div").hide();
    $($(this).data("class")).show();
  });

  //Fire NiceScroll And Some Options

  $("html").niceScroll({
    cursorcolor: "#FF9B51",
    cursorwidth: "7px",
    cursorborder: "1px solid #FF9B51",
    cursorborderradius: "5px",
    cursorspeed: "75",
    zindex: "1031",
  });
  $(window).scroll(function () {
    var navbar = $(".navbar");
    if ($(window).scrollTop() >= 70) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });

  //Show and hide scroll to top button

  var scrollBottom = $("#scroll-top");

  $(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 700) {
      scrollBottom.show();
    } else {
      scrollBottom.hide();
    }
  });

  //scroll to top when clicking

  scrollBottom.click(function () {
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
});
