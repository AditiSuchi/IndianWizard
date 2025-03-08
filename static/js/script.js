// Hamburger

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");


        if (hamburger.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Scroll to Top on Click
const backToTopBtn = document.getElementById("backToTop");

    window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});


//  Teams
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".team-container");
    const totalSlides = document.querySelectorAll(".team-member").length;

    function slideNext() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        slides.style.transition = "transform 1s ease-in-out";
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-slide every 5 seconds
    setInterval(slideNext, 5000);
});





// contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("/submit-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert("✅ " + data.message);
            document.getElementById("contact-form").reset();
        } else {
            alert("❌ Error: " + data.error);
        }
    })
    .catch(error => console.error("Error:", error));
});

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