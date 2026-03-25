// ------------------------------
// ハンバーガーメニュー
// ------------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// ハンバーガークリックでメニュー表示/非表示
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // 外側クリック処理に伝わらないようにする
  navMenu.classList.toggle('active');
});

// メニュー内クリックも閉じない
navMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// 外側クリックでメニューを閉じる
document.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});
