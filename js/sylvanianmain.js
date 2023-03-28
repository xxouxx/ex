const toggleBtn = document.querySelector('.nav_toogleBT');
const menu = document.querySelector('.navmenu');
const sns = document.querySelector('.navsns');
const pro = document.querySelector('.product');
const sub = document.querySelector('.sbsbmn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
    sub.classList.toggle('active');
    
});

const navli =document.querySelectorAll('.navmenu>li');
console.log(navli)
Array.from(navli).forEach((eachmenu, index) => {
  eachmenu.addEventListener('click',function(){
  this.classList.toggle('active');

})
})


$(function() {
  $(".product").click(function() {
      $(".submenu").slideToggle();
      // $("#m2 .box").slideToggle(250, "linear");
  });
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

var swiper02 = new Swiper(".mySwiper03", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination03",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

