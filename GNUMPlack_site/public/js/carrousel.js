window.addEventListener('load', function() {


const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 3500,
    },
    slidesPerView: 1,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    /*autoplay: {
      delay: 3500,
    }, */
    slidesPerView: 2,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  

})