const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 700) navLinks.classList.remove("open");
  });
});

const dropdown = document.querySelector(".dropdown > a");
if (dropdown) {
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      dropdown.parentElement.classList.toggle("open");
    }
  });
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! This form isn't connected yet — messages aren't being sent.");
  form.reset();
});
