const menuButton = document.querySelector(".burger");
const navigation = document.querySelector("#primary-navigation");

const setMenuOpen = (isOpen) => {
  if (!menuButton || !navigation) return;
  navigation.classList.toggle("nav-active", isOpen);
  menuButton.classList.toggle("toggle-burger", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
};

menuButton?.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) setMenuOpen(false);
});

const contactForm = document.querySelector(".contact-form form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = `Pesan portofolio dari ${formData.get("name")}`;
  const body = [
    `Nama: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    "",
    formData.get("message"),
  ].join("\n");

  window.location.href = `mailto:rizzkii01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
