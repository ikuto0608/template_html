(function($){
  $(function(){
    $('.parallax').parallax();
  });
})(jQuery);

$(function(){
  var navMoblie = $("#nav-mobile");
  navMoblie.on("click", "a", null, function () {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if (target.selector == '#trait') {
      position = position - 30;
    }
    $("html, body").animate({scrollTop:position}, speed, "swing");

    document.getElementById("sidenav-overlay").click();
  });
});

$(function(){
  var navWeb = $("#nav-web");
  navWeb.on("click", "a", null, function () {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if (target.selector == '#trait') {
      position = position - 30;
    }
    $("html, body").animate({scrollTop:position}, speed, "swing");
  });
});

$(document).ready(function() {
  var targetRed = $(".material_red").offset().top;
  var targetYellow = $(".material_yellow").offset().top;
  var targetBlue = $(".material_blue").offset().top;

  var $w = $(window).scroll(function(){
    if (targetYellow > $w.scrollTop()) {
      $('#navigation').css({"background-color": "#F8BBD0"});
    } else if (targetBlue > $w.scrollTop()) {
      $('#navigation').css({"background-color": "#FFF9C4"});
    } else {
      $('#navigation').css({"background-color": "#BBDEFB"});
    }
  });
});
