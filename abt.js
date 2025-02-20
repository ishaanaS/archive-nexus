function scrollLeft() {
    const container = document.querySelector('.horizontal-scroll');
    container.scrollBy({
        left: -300, // Scroll left by this amount (adjust as needed)
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.horizontal-scroll');
    container.scrollBy({
        left: +300, // Scroll right by this amount (adjust as needed)
        behavior: 'smooth'
    });
}
