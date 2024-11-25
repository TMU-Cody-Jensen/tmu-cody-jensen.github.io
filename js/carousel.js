document.addEventListener("DOMContentLoaded", () => {
    // ============ VARIABLES ==================
    const ipCarousel = document.querySelector('#ip-carousel');
    const ipItems = document.querySelectorAll('.ip-carousel-item');
    const ipPrevBtn = document.querySelector('.ip-prev-btn');
    const ipNextBtn = document.querySelector('.ip-next-btn');
    let ipCurrentIndex = 0;

    const startupCarousel = document.querySelector('#startup-carousel');
    const startupItems = document.querySelectorAll('.startup-carousel-item');
    const startupPrevBtn = document.querySelector('.startup-prev-btn');
    const startupNextBtn = document.querySelector('.startup-next-btn');
    let startupCurrentIndex = 0;

    const thesisCarousel = document.querySelector('#thesis-carousel');
    const thesisItems = document.querySelectorAll('.thesis-carousel-item');
    const thesisPrevBtn = document.querySelector('.thesis-prev-btn');
    const thesisNextBtn = document.querySelector('.thesis-next-btn');
    let thesisCurrentIndex = 0;

    // ============ UNIVERSAL FUNCTIONS ==================

    // Function to update the carousel position
    const updateCarousel = () => {

        const itemWidth = thesisItems[0].offsetWidth; // Get the width of one item
        thesisCarousel.style.transform = `translateX(-${thesisCurrentIndex * itemWidth}px)`; 
        startupCarousel.style.transform = `translateX(-${startupCurrentIndex * itemWidth}px)`; 
        ipCarousel.style.transform = `translateX(-${ipCurrentIndex * itemWidth}px)`; 
        toggleButtons(); // Check button visibility
    };

    // Function to toggle button visibility
    const toggleButtons = (i) => {
        // Hide the left button if at the beginning
        thesisPrevBtn.style.display = thesisCurrentIndex === 0 ? 'none' : 'block';
        startupPrevBtn.style.display = startupCurrentIndex === 0 ? 'none' : 'block';
        ipPrevBtn.style.display = ipCurrentIndex === 0 ? 'none' : 'block';

        // Hide the right button if at the end
        thesisNextBtn.style.display = thesisCurrentIndex === thesisItems.length - 1 ? 'none' : 'block';
        startupNextBtn.style.display = startupCurrentIndex === startupItems.length - 1 ? 'none' : 'block';
        ipNextBtn.style.display = ipCurrentIndex === ipItems.length - 1 ? 'none' : 'block';
    };

    // ============ EVENT HANDLERS ==================

    // Next button click handler
    thesisNextBtn.addEventListener('click', () => {
        if (thesisCurrentIndex < thesisItems.length - 1) {
            thesisCurrentIndex++;
            updateCarousel();
        }
    });

    startupNextBtn.addEventListener('click', () => {
        if (startupCurrentIndex < startupItems.length - 1) {
            startupCurrentIndex++;
            updateCarousel();
        }
    });


    ipNextBtn.addEventListener('click', () => {
        if (ipCurrentIndex < ipItems.length - 1) {
            ipCurrentIndex++;
            updateCarousel();
        }
    });


    // Previous button click handler
    thesisPrevBtn.addEventListener('click', () => {
        if (thesisCurrentIndex > 0) {
            thesisCurrentIndex--;
            updateCarousel();
        }
    });

    startupPrevBtn.addEventListener('click', () => {
        if (startupCurrentIndex > 0) {
            startupCurrentIndex--;
            updateCarousel();
        }
    });

    ipPrevBtn.addEventListener('click', () => {
        if (ipCurrentIndex > 0) {
            ipCurrentIndex--;
            updateCarousel();
        }
    });


    // Recalculate carousel on window resize
    window.addEventListener('resize', updateCarousel);

    // ============ Initialization ==================

    // Initialize carousel position and button visibility
    updateCarousel();
});
