const swiper1 = new Swiper('.banner_swiper', {

  autoplay: {
    delay: 2000
  },  /*자동 무한 반복 delay는 시간(3000=3초)*/ 

  direction: 'horizontal', //수평 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, /*클릭했을 때 넘어가게 하기*/ 
  }, 

});


/* insta swiper */
const swiper2 = new Swiper('.insta_swiper', {

  direction: 'horizontal',
  loop: false,

  slidesPerView: 4.5, //보이는 개수 
  spaceBetween: 38, //slide 간 여백

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
  0: { slidesPerView: 1.2,
    spaceBetween: 30,}, 
  450: { slidesPerView: 4.5,}, 
  },

});


/* news swiper */
const swiper3 = new Swiper('.news_swiper', {

  direction: 'horizontal',
  loop: false,

  slidesPerView: 1.3, //보이는 개수 
  spaceBetween: 20, //slide 간 여백

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // 0: { slidesPerView: 1.3,
    //   spaceBetween: 20,}, 
    450: { slidesPerView: 1.8,}, 
    },

});

/*banner swiper_mo */
const swiper4 = new Swiper('.banner_swiper_mo', {

  autoplay: {
    delay: 2000
  },  /*자동 무한 반복 delay는 시간(3000=3초)*/ 

  direction: 'horizontal', //수평 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, /*클릭했을 때 넘어가게 하기*/ 
  }, 

});