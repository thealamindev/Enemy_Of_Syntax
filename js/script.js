$(function () {
  $("#show").click(function () {
    $(".box").toggle(1000);
  });
  $("#show").click(function () {
    $(".box_two").toggle(1000);
  });

  new VenoBox({
    selector: ".my-image-links",
    numeration: true,
    infinigall: true,
    share: true,
    spinner: "rotating-plane",
  });

  $(".autoplay").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: ".left",
    nextArrow: ".right",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: true,
          pauseOnHover: false,
          prevArrow: ".left",
          nextArrow: ".right",
          arrows: true,
          // centerMode: true,
          // centerPadding: '',
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // screenshort Part

  $(".start_slide").slick({
    slidesToShow: 3,
    centerPadding: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1000,
          arrows: false,
          pauseOnHover: false,
          // centerMode: true,
          // centerPadding: "0",
        },
      },
      {
        breakpoint: 576.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //

  new VenoBox({
    selector: ".hasan",
  });
  $(".count_up").counterUp();

  //  Stykey Header
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $(".navbar").addClass("sticky_header");
    } else {
      $(".navbar").removeClass("sticky_header");
    }
  });

  var containerEl = document.querySelector(".hasan_container");

  var mixer = mixitup(containerEl);

  var mixer = mixitup(".portfolio-mixitup");
});
