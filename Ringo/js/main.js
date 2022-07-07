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


//------------burger--------------

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('header__nav-active');
  document.querySelector('.burger').classList.toggle('burger-active');
  if (document.querySelector('.burger').classList.contains('burger-active')){
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "unset";
  };
});

//-------------accept----------------

document.querySelector('.contacts__checkbox-wrap').addEventListener('click', () => {
  document.querySelector('.accept>span').classList.toggle('accept-active');
});

//----------------scroll image-------------

const cards = document.querySelectorAll('.js-scroll_container');

const callback = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('js-scroll_active')){
            ele.target.classList.add('js-scroll_active')
        }//else{
        //     ele.target.classList.remove('js-scroll_active')
        // }
    })
}

const observer = new IntersectionObserver(callback);
cards.forEach(card => observer.observe(card));


//--------------scroll text-------------

const title = document.querySelectorAll('h1 , .intro__content>p , h2');

const callbacks = (element) => {
    element.forEach(elem => {
        if(elem.isIntersecting  && !elem.target.classList.contains('title_active')){
            elem.target.classList.add('title_active')
        }//else{
        //     elem.target.classList.remove('title_active')
        // }
    })
}

const observers = new IntersectionObserver(callbacks);
title.forEach(titleCard => observers.observe(titleCard));

//---------active cursor------------

document.querySelectorAll('.benefits__image-wrap img').forEach(pic => {
  const fill = e => {
  pic.style.left = e.offsetX + "px";
};
  pic.addEventListener('mousemove', fill);
});

//----------form---------------

document.querySelectorAll('.site-button_form').forEach(fEl => {
  fEl.addEventListener('click', () =>{
    document.querySelector('.form_pop').classList.add('form_pop-active');
  });
});
document.querySelector('.form__closed').addEventListener('click', () => {
  document.querySelector('.form_pop').classList.remove('form_pop-active');
});