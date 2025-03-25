/*document.addEventListener("DOMContentLoaded", function() {

    let enrollmentSelect = document.getElementById("enrollment");

    // Generate enrollment numbers from 241230107001 to 241230107072

    for (let i = 1; i <= 72; i++) {

        let formattedNumber = i.toString().padStart(3, "0"); // Ensures 001, 002, etc.

        let enrollmentNumber = "241230107" + formattedNumber;

        let option = document.createElement("option");

        option.value = enrollmentNumber;

        option.textContent = enrollmentNumber;

        enrollmentSelect.appendChild(option);

    }

});

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    // 🌟 Change to IPL Cricket Theme 🌟

    document.body.style.background = "url('https://images.unsplash.com/photo-1565130838609-c3a86655db61') no-repeat center center/cover";

    let container = document.querySelector(".container");

    container.style.background = "rgba(0, 0, 0, 0.85)";

    container.style.color = "#ffcc00";

    container.style.boxShadow = "0px 0px 20px rgba(255, 204, 0, 0.8)";

    let title = document.getElementById("formTitle");

    title.innerHTML = "🏏 Congratulation 🏆";

    title.style.color = "#ffcc00";

    title.style.textShadow = "2px 2px 8px rgba(255, 204, 0, 0.9)";

    document.querySelectorAll("label").forEach(label => {

        label.style.color = "#ffffff";

    });

    document.querySelectorAll("input, select").forEach(input => {

        input.style.background = "#222";

        input.style.color = "#ffcc00";

        input.style.border = "2px solid #ffcc00";

    });

    let button = document.querySelector("button");

    button.style.backgroundColor = "#ffcc00";

    button.style.color = "#000";

    button.style.border = "2px solid #ff9900";

    button.style.boxShadow = "0px 0px 10px rgba(255, 204, 0, 0.8)";

    button.style.transition = "0.3s";

    button.onmouseover = function() {

        button.style.backgroundColor = "#ff9900";

        button.style.color = "#fff";

    };

    button.onmouseout = function() {

        button.style.backgroundColor = "#ffcc00";

        button.style.color = "#000";

    };

    let successMessage = document.getElementById("successMessage");

    successMessage.classList.remove("hidden");

    successMessage.style.color = "#ffcc00";

//    successMessage.style.textShadow = "2px 2px 8px rgba(255, 204, 0, 0.9)";

});  
*/




document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");

    const navLinks = document.getElementById("nav-links");

    const navItems = document.querySelectorAll(".nav-item");

    // Toggle Menu

    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";

    });

    // Change color when menu item is clicked and close menu on mobile

    navItems.forEach(item => {

        item.addEventListener("click", function () {

            navItems.forEach(nav => nav.classList.remove("active"));

            this.classList.add("active");

            // Close menu on mobile

            if (window.innerWidth <= 768) {

                navLinks.classList.remove("active");

                hamburger.innerHTML = "☰";

            }

        });

    });

    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {

            navLinks.classList.remove("active");

            hamburger.innerHTML = "☰";

        }

    });

});