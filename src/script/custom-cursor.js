document.addEventListener("DOMContentLoaded", function () {
    let cursor = document.querySelector(".custom-cursor");

    if (!cursor) {
        console.error("Custom cursor element not found!");
        return;
    }

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Function to check brightness and update cursor color
    function updateCursorColor(element) {
        let bgColor = window.getComputedStyle(element).backgroundColor;
        let rgb = bgColor.match(/\d+/g).map(Number); // Extract RGB values
        let brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000; // Calculate brightness

        if (brightness > 128) {
            cursor.style.backgroundColor = "black"; // Light background → Black cursor
        } else {
            cursor.style.backgroundColor = "#d9ff66"; // Dark background → Light green cursor
        }
    }

    // Function to enlarge cursor and update color
    function enlargeCursor(elements) {
        elements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor.style.width = "30px";
                cursor.style.height = "30px";
                updateCursorColor(el); // Change cursor color based on button color
            });

            el.addEventListener("mouseleave", () => {
                cursor.style.width = "20px";
                cursor.style.height = "20px";
                cursor.style.backgroundColor = "#d9ff66"; // Reset color
            });
        });
    }

    // Apply effect to buttons and nav items
    enlargeCursor(document.querySelectorAll("button"));
    enlargeCursor(document.querySelectorAll(".nav-list li"));
    enlargeCursor(document.querySelectorAll(".login-container .create-acc h3"));
    enlargeCursor(document.querySelectorAll(".login .forgot-password h4 "));


});
