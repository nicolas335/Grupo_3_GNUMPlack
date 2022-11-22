window.addEventListener('load', function() {


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
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
 

  let eye = document.getElementById('eye');

  let paragraph = document.querySelectorAll('.img_p');

  let img = document.querySelectorAll('.img_slides');

    eye.addEventListener('click',(e) => {
        if(eye.classList.contains('fa-eye-slash')){
          paragraph.forEach(p=> p.style.display =  'flex')
          img.forEach(img => img.style.opacity = 0)
          eye.classList.toggle('fa-eye')
        }else{
          eye.classList.toggle('fa-eye-slash') 
          eye.classList.toggle('fa-eye')
        }
        if (eye.classList.contains('fa-eye')) {
          paragraph.forEach( p => p.style.display =  'none')
          img.forEach(img => img.style.opacity = 1)
        }

        
    })

})