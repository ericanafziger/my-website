$(document).ready(function(){

  // ================Recalculates window height on resize================//
  $(window).resize(function() {
   height();
 });
 function height () {
    var fromBottom = $(document).height()-400-$(window).height();
    return fromBottom
  }
  // ================Scroll Top Blog Post Functionality ================//
    $(window).scroll(function() {

      if ($(document).scrollTop() > 350 && $(document).scrollTop() < height()) {
        $(".top.fixed").fadeIn(300);
      } else {
        $(".top.fixed").fadeOut(300);
      }
    });

  // ================Page Scroll Functionality ================//

  $(".more").click(function() {
      $('html, body').animate({
          scrollTop: $(".section-two").offset().top,
          behavior: 'smooth',
      }, 1000);
  });

  $(".top").click(function() {
      $('html, body').animate({
          scrollTop: $("#top-of-page").offset().top,
          behavior: 'smooth',
      }, 1000);
  });
  $(".go-home").click(function() {
      $('html, body').animate({
          scrollTop: $("#top-of-page").offset().top,
          behavior: 'smooth',
      }, 1000);
  });

// ================Menu Bars Animation ================//

$(".menu-bars").click(function() {
  $(".nav-line:nth-child(1)").toggleClass("animate-top");
  $(".nav-line:nth-child(2)").toggleClass("animate-middle");
  $(".nav-line:nth-child(3)").toggleClass("animate-bottom");
  $(".wrap").toggleClass("pull");
  $(".side-nav").toggleClass("push");
});

// ================Slideshow Functionality ================//

  var totalImages = $(".images").children().length; // # of total slideshow images
  var imageCounter = $(".images").children().length; // keeps track of current image

    setInterval(function() {
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".images img").removeClass("active");
    if (photoNumber < totalImages) {
      imageCounter = photoNumber + 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photoNumber === totalImages) {
      imageCounter = 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    photoNumber += 1;
    $(".circles i").removeClass("fa-circle");
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  }, 6000);

  $(".arrows .fa-angle-left").click(function(){
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".circles i").removeClass("fa-circle");
    $(".images img").removeClass("active");
    if (photoNumber===1) {
      imageCounter = $(".images").children().length;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter -= 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  });

  $(".arrows .fa-angle-right").click(function(){
    var photoNumber = parseInt($(".images .active").attr('class')); // active photo
    $(".circles i").removeClass("fa-circle");
    $(".images img").removeClass("active");
    if (photoNumber < totalImages) {
      imageCounter = photoNumber + 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else if (photoNumber === totalImages) {
      imageCounter = 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    } else {
      imageCounter += 1;
      $(".images img:nth-child("+imageCounter+")").addClass("active");
    }
    $(".circles i:nth-child("+imageCounter+")").addClass("fa-circle");
  });
  $(".circles i").click(function(){
    var circleNumber = $(this).attr('class').replace(/[^\d]/g, ""); // clicked circle
    $(".circles i").removeClass("fa-circle");
    $(this).addClass("fa-circle");
    $(".images img").removeClass("active");
    $(".images img:nth-child("+circleNumber+")").addClass("active");
    imageCounter = circleNumber;
  });

}); //end of document ready
