// =========================
// BloomFroot: JS Core
// =========================
// Contains:
//1. Footer Year Auto-Update
//2. Mobile Nav Menu Toggle

// 1. Update the Copyright Year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. Mobile Navigation Hamburger Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
   
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        });

    }
});