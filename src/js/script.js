$(document).ready(function () {
  // === todays year ===
  let todaysYear = {
    box: $('.todays'),
    date: new Date(),
  }

  function fullDate() {
    let year = todaysYear.date.getFullYear();
    let month = todaysYear.date.getMonth() + 1;
    let day = todaysYear.date.getDate();

    if(month < 10) {
      month = '0'+month;
    }

    if(day < 10) {
      day = '0'+day;
    }

    return `${day}.${month}.${year}`;
  }

  $(todaysYear.box).text(fullDate());

  // === Slider ===
  //structure-prod
  const swiper = new Swiper('.structure-prod-slider .swiper-container', {
    // Default parameters
    slidesPerView: 1,
  })

  const swiperItem = $('.structure-prod-slider .swiper-slide');

  function structureProdChangeActiveElement() {
    if($(window).width() <= 1250 ) {
      function changeColorElement() {
        const activeSlideIndex = swiper.activeIndex + 1;
        const title = $(`.structure-prod-item .structure-prod-item__element`);
        const activeTitle = $(`.structure-prod-item_${activeSlideIndex} .structure-prod-item__element`);
  
        $(title).removeClass("active");
        $(activeTitle).addClass("active");
      }
  
      changeColorElement();
  
  
      swiper.on('slideChange', function () {
        changeColorElement();
        $('.structure-prod-slider__decor .img').css("animation-iteration-count", "1");
        $('.structure-prod-slider__decor').css("opacity", "0")
      });
    }
  }

  structureProdChangeActiveElement();

  $(window).on("resize" , () => {
    structureProdChangeActiveElement();
  })

  //reviews-slider
  var swiper2 = new Swiper(".reviews-slider-box", {
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".reviews-swiper-button-next",
      prevEl: ".reviews-swiper-button-prev",
    },
  });

  let reviewsText = $('.reviews-text-box-item');
  let reviewsSlide = $('.reviews-slider-container .swiper-slide');

  function showTextInfoReviewsSlider(index) {
    for (let i = 0; i < reviewsText.length; i++) {
      const element = reviewsText[i];
      $(element).removeClass('active');
    }
    $(reviewsText[index]).addClass('active');
  }

  showTextInfoReviewsSlider(1);

  swiper2.on('slideChange', function() {
    showTextInfoReviewsSlider(swiper2.activeIndex);
  })

  // === form link ===

  $(".form-link").on("click", function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $('#formBottom').offset().top - 30
    }, 1000);
  });
});