// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
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
