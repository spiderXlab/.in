  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.querySelector(".navbar");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";
        });
    }

    document.addEventListener("scroll", function () {
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50 ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none";
        }
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

            if (navLinks) {
                navLinks.classList.remove("active");
                if (hamburger) hamburger.innerHTML = "☰";
            }
        });
    });

    // Smooth scrolling for "BACK TO TOP"
    const backToTop = document.querySelector(".back a");
    if (backToTop) {
        backToTop.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
