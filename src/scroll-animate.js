// Simple scroll animation using Intersection Observer
export function setupScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-animate');
  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach(el => observer.observe(el));
}

// For non-React usage, you could call setupScrollAnimations() on DOMContentLoaded. 