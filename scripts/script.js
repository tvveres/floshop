function searchPage() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(el => {
        el.classList.remove('highlight');
    });
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) return;
    const productContainer = document.querySelector('.shopping');
    const productCards = document.querySelectorAll('.shopping-card');
    const match = [];

    productCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            card.innerHTML = card.innerHTML.replace(regex, '<span class="highlight">$1</span>'); //  оборачивая совпадающий текст в тег для подсветки 
            match.push(card); 
        }
    });

    // Перемещение  в начало
    match.forEach(card => {
        productContainer.prepend(card);
    });
    const firstHighlight = document.querySelector('.highlight');
    if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
