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


// JavaScript for Validation and Submission

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phnnumber = document.getElementById('phnnumber').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '' || phnnumber === '') {
        showMessage('Please fill out all fields.', 'error');
    } else if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
    } else if (!validatePhoneNumber(phnnumber)) {
        showMessage('Please enter a valid phone number.', 'error');
    } else {
        showMessage('Message sent successfully! 🎉', 'success');
        form.reset(); // Clear form
    }
});


// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// Phone Number Validation Function
function validatePhoneNumber(phoneNumber) {
    // Regular expression to match phone numbers (adjust based on country format)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format (international numbers)
    return phoneRegex.test(phoneNumber);
}


//  data on mail

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    var form = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbxkaQ3A-tserLCgndBpyGo9dlrPqsRmoi1Udoc1rp-Kkp33gtwF36PyjRagL429-vFlAw/exec", {
        method: "POST",
        body: form,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                alert("Message sent successfully! 🎉");
            } else {
                alert("Error sending message.");
            }
        })
        .catch(error => alert("An error occurred: " + error));
});