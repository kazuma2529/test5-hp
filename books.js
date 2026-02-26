// 書籍フィルター機能
const filterBtns = document.querySelectorAll('.filter-btn');
const bookCards = document.querySelectorAll('.book-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // アクティブボタンの切り替え
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const genre = btn.getAttribute('data-genre');
        
        // フィルタリング
        bookCards.forEach(card => {
            if (genre === 'all' || card.getAttribute('data-genre') === genre) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
