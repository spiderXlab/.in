// ========================
// 📩 CONTACT FORM + OTP
// ========================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");
  const sendOTPBtn = document.getElementById("send-otp");
  const otpField = document.getElementById("otp");
  const submitBtn = document.getElementById("submit-btn");
  let generatedOTP = "";

  if (!form || !sendOTPBtn || !otpField || !submitBtn) {
    console.warn("Form or one of its elements not found!");
    return;
  }

  sendOTPBtn.addEventListener("click", function () {
    const mobile = document.getElementById("mobile").value.trim();
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Your OTP is: " + generatedOTP); // Replace in production
    otpField.style.display = "block";
    otpField.focus();
  });

  otpField.addEventListener("input", function () {
    submitBtn.style.display = otpField.value === generatedOTP ? "inline-block" : "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        form.style.display = "none";
        thankYou.classList.add("show");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(error => {
      alert("Error: " + error.message);
    });
  });
}

// ========================
// 🚀 Initialize When DOM is Ready
// ========================
document.addEventListener("DOMContentLoaded", function () {
  initContactForm();

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger?.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active") ? "Ｘ" : "☰";
  });

  document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 50 ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none";
    }
  });

  const sections = ["home", "about", "skills", "gallery", "projects", "feedback", "contact"];
  sections.forEach(id => {
    const link = document.querySelector(`.nav-item[href="#${id}"]`);
    const target = document.getElementById(id);
    if (link && target) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        navLinks?.classList.remove("active");
        hamburger.innerHTML = "☰";
      });
    }
  });

  document.querySelector('.back a')?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: "30px", behavior: "smooth" });
  });

  // ========================
  // 🖼️ GALLERY SLIDER
  // ========================
  const slider = document.getElementById('gallerySlider');
  const slides = slider?.querySelectorAll('.photo') || [];
  const dotsContainer = document.getElementById('dotsContainer');
  let currentIndex = 0;
  let interval;

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.textContent = index === 0 ? '●' : '○';
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots(index) {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, i) => {
      dot.textContent = i === index ? '●' : '○';
      dot.classList.toggle('active-dot', i === index);
    });
  }

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    slider.scrollTo({ left: index * 340, behavior: 'smooth' });
    currentIndex = index;
    updateDots(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }, 5000);
  }

  slider?.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
  slider?.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) currentIndex = (currentIndex + 1) % slides.length;
    else if (endX - startX > 50) currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % slides.length;
    else if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  });

  function initGallery() {
    if (slides.length > 0) {
      slides[0].classList.add('active');
      createDots();
      updateDots(0);
      startAutoSlide();
    }
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader')?.style.setProperty('display', 'none');
      document.querySelector('.gallery')?.style.setProperty('display', 'block');
      initGallery();
    }, 1500);
  });

  // ========================
  // 🎯 CTA Reveal on Scroll
  // ========================
  const cta = document.getElementById("cta");
  function revealCTA() {
    if (!cta) return;
    const rect = cta.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      cta.classList.add("reveal");
      window.removeEventListener("scroll", revealCTA);
    }
  }
  window.addEventListener("scroll", revealCTA);
  revealCTA();

  // ========================
  // 📄 Resume Download
  // ========================
  window.downloadAndOpen = function (event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open('resume.pdf', '_blank');
  }
});
