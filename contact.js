// お問い合わせフォームの送信処理
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // 実際の送信処理はここに実装
        console.log('送信データ:', data);
        
        // 送信完了メッセージ
        alert('お問い合わせを受け付けました。\n\n2〜3営業日以内にご返信いたします。\nありがとうございました。');
        
        // フォームのリセット
        contactForm.reset();
    });
}
