const swiper = new Swiper('.intro__swiper', {
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.intro__pagination',
      clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
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
    spaceBetween: 100,

    navigation: {
      nextEl: '.work__button-next',
      prevEl: '.work__button-prev',
    },

    pagination: {
      el: '.work__pagination',
      type: 'bullets',
      bulletClass: 'work__pagination_bullet',
      bulletActiveClass: 'work__pagination_bullet-active',
      clickable: true,
    },
    breakpoints: {
      325: {
        slidesPerView: "auto",
      },
      650: {
        slidesPerView: "auto",
        spaceBetween: 40,
      }
    },
    centeredSlides: true,
  });


//burger
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('header__nav-active');
  document.querySelector('.burger').classList.toggle('burger-active');
  if (document.querySelector('.burger').classList.contains('burger-active')){
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "unset";
  };
});
//accept
document.querySelector('.contacts__checkbox-wrap').addEventListener('click', () => {
  document.querySelector('.accept>span').classList.toggle('accept-active');
});
