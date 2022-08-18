const navToggle = document.querySelector(".headernav-toggle");
const navMenu = document.querySelector(".headernav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("headernav-menu_visible");

  if (navMenu.classList.contains("headernav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});