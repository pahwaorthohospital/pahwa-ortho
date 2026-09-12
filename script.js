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
const formStatus = document.getElementById("form-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Sending...";
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        formStatus.textContent = "Thank you! Your message has been sent — we'll get back to you soon.";
        form.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please call us instead at 01667-222497.";
      }
    })
    .catch(() => {
      formStatus.textContent = "Something went wrong. Please call us instead at 01667-222497.";
    });
});
