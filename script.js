const splash = document.getElementById("splash-screen");
if (splash) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const alreadySeen = sessionStorage.getItem("splashSeen");

  if (alreadySeen || reduceMotion) {
    splash.classList.add("splash-instant");
  } else {
    sessionStorage.setItem("splashSeen", "1");
    const dismiss = () => splash.classList.add("splash-hide");
    const timer = setTimeout(dismiss, 2000);
    splash.addEventListener("click", () => {
      clearTimeout(timer);
      dismiss();
    });
  }
}

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
