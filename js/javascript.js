$(".menu").on("click", () => {
  $("nav").addClass("open-nav");
});

$(".close").on("click", () => {
  $("nav").removeClass("open-nav");
});

$(".gallery").on("click", () => {
  $(".wrapper section").hide();
  $(".weplayers").hide();
  $(".pictures").show();
  $(".hero-img").css("height","12vh");
  $('.pic').each(function (index, elem) {
    $(elem).data('startX', $(elem).position().left);
    $(elem).data('startY', $(elem).position().top);
  });
});

$(".players").on("click", () => {
  $(".wrapper section").hide();
  $(".pictures").hide();
  $(".weplayers").show();
  $(".hero-img").css("height","12vh");
  $('.pic').each(function (index, elem) {
    $(elem).data('startX', $(elem).position().left);
    $(elem).data('startY', $(elem).position().top);
  });
});

$(".home").on("click", () => {
  $(".wrapper section").show();
  $(".pictures").hide();
  $(".weplayers").hide();
  $(".hero-img").css("height","100vh");
});

$(document).ready(function () {
    let $allPics = $('.pic');
    let picFull = null;

    $allPics.each(function (index, elem) {
      $(elem).data('startX', $(elem).position().left);
      $(elem).data('startY', $(elem).position().top);
    });
    $(window).resize(function (){
      $allPics.each(function (index, elem) {
        $(elem).data('startX', $(elem).position().left);
        $(elem).data('startY', $(elem).position().top);
      });
    });

    let reset = function () {
      if (picFull) {
        $(picFull).animate({
          left: 0,
          top: 0,
        },
          600,
          function () {
            $(this).removeAttr("id");
            $(this).addClass("pic")
          });
      }
    }
    $allPics.focusin(function () {
      picFull = this;
      $(this).attr('id', 'full').removeClass("pic").animate({
        left: $(window).width() / 2 - $(this).data('startX') - $(this).width() / 2,
        top: $(window).height() / 2 + $(window).height()/20 - $(this).data('startY') - $(this).height() / 2,
      });
    });
    $allPics.focusout(function () {
      reset();
    });
});