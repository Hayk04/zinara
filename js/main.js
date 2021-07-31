$(document).ready(function() {
  const toggleNav = $('.menu__btn');
  const nav = $('#nav');
  toggleNav.click(function() {
    nav.toggleClass('open');
    $(".logo").css("display", "none");
    $(toggleNav).css("display", "none");
    $('.header__abs1').css("display", "none");
    $('.header__abs2').css("display", "block");
    $(".menu").css("width", "100%");
  });

  new WOW().init();
  setTimeout(
    function() 
    {
      $('.smas__item5').addClass('fadein')
      $('.smas__item6').addClass('fadein')
      $('.about__item1').addClass('fadein1')
      $('.about__item4').addClass('fadein2')
      $('.works__item2').addClass('fadein3')
      $('.works__item3').addClass('fadein3')
      $('.certificate__item2').addClass('fadein4')
      $('.footer__item2').addClass('fadein5')
      $('.smas__item2').addClass('fadein6')
      $('.about__img1').addClass('fadein7')
      $('.about__img2').addClass('fadein9')
      $('.works__item').addClass('fadein8')
    }, 500);

  setTimeout(
    function() 
    {
      $('.smas__item5').removeClass('fadein').addClass('up_down')
      $('.smas__item6').removeClass('fadein').addClass('up_down10')
      $('.about__item1').removeClass('fadein1').addClass('up_down1')
      $('.about__item4').removeClass('fadein2').addClass('up_down2')
      $('.works__item2').removeClass('fadein3').addClass('up_down3')
      $('.works__item3').removeClass('fadein3').addClass('up_down11')
      $('.certificate__item2').removeClass('fadein4').addClass('up_down4')
      $('.footer__item2').removeClass('fadein5').addClass('up_down5')
      $('.smas__item2').removeClass('fadein6').addClass('up_down6')
      $('.about__img1').removeClass('fadein7').addClass('up_down7')
      $('.works__item').removeClass('fadein8').addClass('up_down8')
    }, 2500);
  
  setTimeout(
    function() {
      $('.about__img2').removeClass('fadein9').addClass('up_down9')
    }, 3000)

  const swiper1 = new Swiper('.works__container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    mousewheel: true,
    spaceBetween: -65,
    breakpoints: {
      1500: {
        slidesPerView: 4.32,
        spaceBetween: -200,
      },
      1645: {
        slidesPerView: 4.4,
        spaceBetween: -200,
      },
    },
  });

  const swiper2 = new Swiper('.certificate__container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    mousewheel: true,
    spaceBetween: -65,
    breakpoints: {
      1500: {
        slidesPerView: 4.32,
        spaceBetween: -200,
      },
      1645: {
        slidesPerView: 4.4,
        spaceBetween: -200,
      },
    },
  });

});