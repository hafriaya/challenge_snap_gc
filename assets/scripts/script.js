const humberger = document.querySelector(
  ".header__nav-bar__nav-menu__humberger"
);
const navMenu = document.querySelector(".header__nav-bar__nav-menu");

humberger.addEventListener("click", mobileMenu);

function mobileMenu() {
  humberger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".header__nav-bar__nav-menu__nav-item__nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    humberger.classList.remove("active");
    navMenu.classList.remove("active");
  }