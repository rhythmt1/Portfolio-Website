// Portfolio Website JavaScript
// This script handles navigation toggling for mobile views,
// dynamically inserts the current year into the footer and
// could be extended for more interactive features like animations.

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const footerYear = document.getElementById('year');

  // Toggle navigation on mobile
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });

  // Set current year
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});