const toggleBtn = document.querySelector('.nav_toogleBT');
const menu = document.querySelector('.navmenu');
const sns = document.querySelector('.navsns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});