document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";
    });

    document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

    // Smooth scrolling for Contact link
    document.querySelector('.nav-item[href="#contact"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";
    });
    // Smooth scrolling for "BACK TO TOP"
    document.querySelector('.back a').addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


    
