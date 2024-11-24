document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const cardHeaders = document.querySelectorAll(".MRP-dropdown");
    const cards = document.querySelectorAll(".mrp-card");

    // Toggle individual cards
    cardHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const card = header.closest(".mrp-card");
            const content = card.querySelector(".MRP-text");
            const button = card.querySelector(".toggle-btn");

            // Close all other cards
            cards.forEach((otherCard) => {
                const otherContent = otherCard.querySelector(".MRP-text");
                const otherButton = otherCard.querySelector(".toggle-btn");

                if (otherCard !== card) {
                    otherContent.style.display = "none"; // Hide other content
                    otherButton.textContent = "+"; // Reset button symbol
                }
            });

            // Toggle the selected card
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                button.textContent = "−"; // Change button to minus
            } else {
                content.style.display = "none";
                button.textContent = "+"; // Change button to plus
            }
        });
    });
});