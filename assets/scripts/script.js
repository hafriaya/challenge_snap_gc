const humberger = document.querySelector(
  ".header__nav-bar__nav-menu__humberger"
);
const navBar = document.querySelector(".header__nav-bar");

humberger.addEventListener("click", mobileMenu);

// mobileMenu function
function mobileMenu() {
  console.log("mobile menu");
  humberger.classList.toggle("active");
  navBar.classList.toggle("active");
}
console.log("script running");

const navLink = document.querySelectorAll(
  ".header__nav-bar__nav-menu__nav-item__nav-link"
);

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  humberger.classList.remove("active");
  navMenu.classList.remove("active");
}


// dropdown function
navLink.forEach((dropdownTrigger) => {
  dropdownTrigger.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownContent = dropdownTrigger.nextElementSibling;
    dropdownContent.classList.toggle("show");
  });
});

// arrow function
function changeArrow() {
  const arrow = document.querySelector(
    ".header__nav-bar__nav-menu__nav-item__nav-link__arrow"
  );
  const arrowSrc = arrow.src;
  if (arrowSrc.includes("arrow-down")) {
    arrow.src = "./assets/images/icon-arrow-up.svg";
  } else {
    arrow.src = "./assets/images/icon-arrow-down.svg";
  }
}
