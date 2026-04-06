const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const menuLinkRefs = document.querySelectorAll(".menu-navigation-link");

menuBtnRef.addEventListener("click", () => {
  window.scrollTo(0, 0);
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  document.body.classList.toggle("menu-open");
  mobileMenuRef.classList.toggle("is-open");
});

menuLinkRefs.forEach((ref) => {
  ref.addEventListener("click", () => {
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
    mobileMenuRef.classList.remove("is-open");
  });
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth >= 1440) {
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
    mobileMenuRef.classList.remove("is-open");
  }
});
