document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const cardHeaders = document.querySelectorAll(".card-header");
    const cards = document.querySelectorAll(".course-card");

    const openAllButton = document.getElementById("open-all");
    const closeAllButton = document.getElementById("close-all");

    // Toggle individual cards
    cardHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const card = header.closest(".course-card");
            const content = card.querySelector(".card-content");
            const button = card.querySelector(".toggle-btn");

            // Close all other cards - Disabled to allow for opening of individual cards
            /*
            cards.forEach((otherCard) => {
                const otherContent = otherCard.querySelector(".card-content");
                const otherButton = otherCard.querySelector(".toggle-btn");

                if (otherCard !== card) {
                    otherContent.style.display = "none"; // Hide other content
                    otherButton.textContent = "+"; // Reset button symbol
                }
            });
            */

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

    /*
    function CloseAll() 
    {        
        cardHeaders.forEach((header) => {
            const card = header.closest(".course-card");
            const content = card.querySelector(".card-content");
            const button = card.querySelector(".toggle-btn");

            // Toggle the selected card
            content.style.display = "block";
            button.textContent = "−"; // Change button to minus
        });        
    }

    function OpenAll() 
    {        
        cardHeaders.forEach((header) => {
            const card = header.closest(".course-card");
            const content = card.querySelector(".card-content");
            const button = card.querySelector(".toggle-btn");

            // Toggle the selected card
            content.style.display = "none";
            button.textContent = "+"; // Change button to plus
        });        
    }

    openAllButton.addEventListener("click", () => {
        OpenAll();
    });

    closeAllButton.addEventListener("click", () => {
        CloseAll();
    });
    */
    
});