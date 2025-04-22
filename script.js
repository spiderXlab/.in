
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
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

    // Smooth scrolling for "Contact" link

    document.querySelector('.nav-item[href="#contact"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";

    });
    
      // Smooth scrolling for " about " link
      
    document.querySelector('.nav-item[href="#about"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";

    });

   

        // smooth scrolling for "skill

    document.querySelector('.nav-item[href="#skills"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";

    });


    // smooth scrolling for "gallery

    document.querySelector('.nav-item[href="#gallery"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";

    });
 

    // smooth scrolling for "Projects"

    document.querySelector('.nav-item[href="#projects"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";
    });

    
        // Smooth scrolling for "Home"

    document.querySelector('.nav-item[href="#home"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        navLinks.classList.remove("active"); // Close menu after clicking
        hamburger.innerHTML = "☰";
    });

    // Smooth scrolling for "BACK TO TOP"

    document.querySelector('.back a').addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
const slider = document.getElementById('gallerySlider');
const slides = slider.querySelectorAll('.photo');
const dotsContainer = document.getElementById('dotsContainer');
let currentIndex = 0;
let interval;

// Spinner timeout
window.addEventListener('load', () => {
setTimeout(() => {
document.getElementById('loader').style.display = 'none';
document.querySelector('.gallery').style.display = 'block';
initGallery();
}, 1500);
});

// Setup dots
function createDots() {
slides.forEach((_, index) => {
const dot = document.createElement('span');
dot.textContent = index === 0 ? '●' : '○';
dot.addEventListener('click', () => {
goToSlide(index);
});
dotsContainer.appendChild(dot);
});
}

// Update dots
function updateDots(index) {
const dots = dotsContainer.querySelectorAll('span');
dots.forEach((dot, i) => {
dot.textContent = i === index ? '●' : '○';
dot.classList.toggle('active-dot', i === index);
});
}

// Slide to specific index
function goToSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove('active');
if (i === index) {
slide.classList.add('active');
}
});

slider.scrollTo({
left: index * (340), // image + gap
behavior: 'smooth'
});

currentIndex = index;
updateDots(currentIndex);
}

// Auto slide
function startAutoSlide() {
interval = setInterval(() => {
currentIndex = (currentIndex + 1) % slides.length;
goToSlide(currentIndex);
}, 5000);
}

// Swipe control for mobile
let startX = 0;
slider.addEventListener('touchstart', (e) => {
startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
const endX = e.changedTouches[0].clientX;
if (startX - endX > 50) {
currentIndex = (currentIndex + 1) % slides.length;
} else if (endX - startX > 50) {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}
goToSlide(currentIndex);
});

// Keyboard control
document.addEventListener('keydown', (e) => {
if (e.key === 'ArrowRight') {
currentIndex = (currentIndex + 1) % slides.length;
goToSlide(currentIndex);
} else if (e.key === 'ArrowLeft') {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
goToSlide(currentIndex);
}
});

// Init
function initGallery() {
slides[0].classList.add('active');
createDots();
updateDots(0);
startAutoSlide();
}

    
 const cta = document.getElementById("cta");

  function revealCTA() {
    const rect = cta.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      cta.classList.add("reveal");
      window.removeEventListener("scroll", revealCTA);
    }
  }

  window.addEventListener("scroll", revealCTA);
  revealCTA();

});






                          
