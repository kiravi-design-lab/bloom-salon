// ハンバーガークリックでメニュー表示/非表示
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // クリックイベントが外側に伝わらないようにする
  navMenu.classList.toggle('active');
});

// 外側クリックでメニューを閉じる
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('active') && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});


// モーダル
const newsLinks = document.querySelectorAll('.news-link');
const modal = document.getElementById('news-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal .close');

newsLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    modalTitle.textContent = link.dataset.title;
    modalBody.textContent = link.dataset.content;
    modal.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
