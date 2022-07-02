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
    slidesPerView: "auto",
    spaceBetween: 40,

    navigation: {
      nextEl: '.work__button-next',
      prevEl: '.work__button-prev',
    },
    centeredSlides: true,
  });



  //accept
  document.querySelector('.contacts__checkbox-wrap').addEventListener('click', () => {
    document.querySelector('.accept>span').classList.toggle('accept-active');
  });