document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0; // Start with the first item

    // Function to update the carousel position
    const updateCarousel = () => {
        const itemWidth = items[0].offsetWidth; // Get the width of one item
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move the carousel
        toggleButtons(); // Check button visibility
    };

    // Function to toggle button visibility
    const toggleButtons = () => {
        // Hide the left button if at the beginning
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        // Hide the right button if at the end
        nextBtn.style.display = currentIndex === items.length - 1 ? 'none' : 'block';
    };

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Recalculate carousel on window resize
    window.addEventListener('resize', updateCarousel);

    // Initialize carousel position and button visibility
    updateCarousel();
});
