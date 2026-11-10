const menuButton = document.querySelector(".burger");
const navigation = document.querySelector("#primary-navigation");
const themeButton = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme, save = false) => {
  document.documentElement.dataset.theme = theme;
  themeButton?.setAttribute("aria-label", theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap");
  themeColorMeta?.setAttribute("content", theme === "dark" ? "#111016" : "#f7f6f2");
  if (save) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (_) {}
  }
};

themeButton?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
});

setTheme(document.documentElement.dataset.theme);

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
