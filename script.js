
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

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dotsContainer");
const galleryContainer = document.querySelector(".gallery-container");
const loader = document.getElementById("loader");

let currentIndex = 0;
let slideInterval;

// Wait until all images are loaded
let totalImages = document.querySelectorAll(".slide img").length;
let loadedCount = 0;

document.querySelectorAll(".slide img").forEach(img => {
  img.addEventListener("load", () => {
    loadedCount++;
    if (loadedCount === totalImages) {
      loader.style.display = "none";
      galleryContainer.style.display = "block";
      startSlideShow();
    }
  });
});

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000);
}

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    clearInterval(slideInterval);
    nextSlide();
    startSlideShow();
  } else if (e.key === "ArrowLeft") {
    clearInterval(slideInterval);
    prevSlide();
    startSlideShow();
  }
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    clearInterval(slideInterval);
    startSlideShow();
  });
});

// Mobile swipe
let startX = 0;
document.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) {
    clearInterval(slideInterval);
    if (diff > 0) nextSlide();
    else prevSlide();
    startSlideShow();
  }
});
    
});
