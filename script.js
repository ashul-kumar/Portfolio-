const track = document.querySelector(".carousel-track");
track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});
track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => {
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the theme preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

// Optional: Future enhancement with scroll animations or reveal
document.addEventListener('DOMContentLoaded', () => {
  // You can later add AOS or IntersectionObserver for scroll-in effects
  console.log("Timeline ready!");
});



  feather.replace();

  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 80;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // for instant reveal if in view


  


