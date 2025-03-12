// Hamburger

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll("#nav-links a"); // Select all links inside nav

    // Toggle menu when clicking on hamburger
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking on a link
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Reset to menu icon
        });
    });
});



// 

const textArray = [
    "Revolutionizing businesses with innovative digital solutions. 💡",
    "Bridging the gap between ideas and execution. 🔗",
    "Empowering enterprises with cutting-edge technology. ⚙️",
    "Shaping the future of AI, Web, and Data Science. 🔥"
];

let textIndex = 0;
let charIndex = 0;
const speed = 100; // Typing speed
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typewriter.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 2000); // Pause before erasing
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500); // Pause before typing next text
    }
}

// Start the animation after the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});
