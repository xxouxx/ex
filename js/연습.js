const toggleBtn = document.querySelector('.nav_toogleBT');
const menu = document.querySelector('.navmenu');
const sns = document.querySelector('.navsns');
const pro = document.querySelector('.product');
const sub = document.querySelector('.sbsbmn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
    
    
});
// pro.addEventListener('click',() => {
//     sub.classList.toggle('active');

// })

// $(function() {
//     $(".product").click(function() {
//         $(".submenu").slideToggle();
//         $(".sbsbmn").slideToggle();
//     });
// });

//메뉴버튼을 아이콘폰트로 사용했을때, 아이콘폰트 내용을 변경
$(".product").click(function() {
    $(".submenu").toggleClass("on");
    //선택자의 텍스트를 뽑아 'close'와 비교해서 true값이면 'menu_open'(왼쪽)으로 바꾸고, false값이면 'close'(오른쪽)로 바꾼다.
    //이는 클릭할때마다 반복된다.
});


