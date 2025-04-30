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
