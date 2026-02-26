// ニュースフィルター機能
const filterBtns = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.news-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // アクティブボタンの切り替え
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        // フィルタリング
        newsItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'grid';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});
