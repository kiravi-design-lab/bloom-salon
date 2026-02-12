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

// ------------------------------
// お知らせモーダル
// ------------------------------
const newsLinks = document.querySelectorAll('.news-link');
const modal = document.getElementById('news-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal .close');

// お知らせクリックでモーダル表示
newsLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modalTitle.textContent = link.dataset.title;
    modalBody.textContent = link.dataset.content;
    modal.style.display = 'block';
  });
});

// モーダル閉じるボタン
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// モーダル外側クリックで閉じる
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ------------------------------
// 追加：キーボードEscでもモーダルを閉じる
// ------------------------------
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});
