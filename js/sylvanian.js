const toggleBtn = document.querySelector('.nav_toogleBT');
const menu = document.querySelector('.navmenu');
const sns = document.querySelector('.navsns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper02 = new Swiper(".mySwiper03", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination03",
      clickable: true,
    },
  });
