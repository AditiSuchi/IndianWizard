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





document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".typing-text");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 50;
    }

    function startTypingAnimation() {
        typingElements.forEach((element) => {
            if (isInViewport(element) && !element.classList.contains("animated")) {
                element.classList.add("animated");
                element.style.animation = "typing 2s steps(30, end) forwards";
            }
        });
    }

    window.addEventListener("scroll", startTypingAnimation);
    startTypingAnimation(); // Run on page load
});




document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                    entry.target.classList.remove("hide");
                }, index * 300); // Delay each step appearing
            } else {
                entry.target.classList.remove("show");
                entry.target.classList.add("hide");
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    steps.forEach(step => observer.observe(step));
});



