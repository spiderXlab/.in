document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";
    });

    // Smooth scrolling for Contact link
    document.querySelector('.nav-item[href="#contact"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";
    });
});


    
