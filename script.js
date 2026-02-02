// Mobile menu
const mobileBtn = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "block";
    mobileMenu.style.display = isOpen ? "none" : "block";
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}

// FAQ accordion
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // close all
    document.querySelectorAll(".faq-q").forEach((b) => b.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".faq-a").forEach((a) => (a.style.display = "none"));

    // open current if was closed
    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
      answer.style.display = "block";
    }
  });
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const onReveal = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
};
window.addEventListener("scroll", onReveal);
window.addEventListener("load", onReveal);
onReveal();

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
