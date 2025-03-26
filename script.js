
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        // Toggle Hamburger Menu Icon
        hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";
    });

    // Change color when menu item is clicked
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
            navLinks.classList.remove("active");
            hamburger.innerHTML = "☰";
        });
    });
});
