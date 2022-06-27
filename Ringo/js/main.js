const swiper = new Swiper('.intro__swiper', {
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.intro__pagination',
    },
  
    navigation: {
      nextEl: '.intro__button-next',
      prevEl: '.intro__button-prev',
    },
  
    scrollbar: {
      el: '.intro__scrollbar',
    },
  });

  const swiper2 = new Swiper('.work__swiper', {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.work__button-next',
      prevEl: '.work__button-prev',
    },
  });