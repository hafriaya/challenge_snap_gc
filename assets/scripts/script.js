const hamberger = document.querySelector(
  ".header__navigation__nav-bar__nav-menu__hamberger"
);
const navBar = document.querySelector(".header__navigation__nav-bar");

const navLink = document.querySelectorAll(
  ".header__navigation__nav-bar__nav-menu__nav-item__nav-link"
);


hamberger.addEventListener("click", mobileMenu);
// mobileMenu function
function mobileMenu() {
  console.log("mobile menu");
  hamberger.classList.toggle("active");
  navBar.classList.toggle("active");
}



navLink.forEach(n => n.addEventListener("click", () => {}));

function closeMenu() {
  hamberger.classList.remove("active");
  navBar.classList.remove("active");
}


// dropdown function
navLink.forEach((dropdownTrigger) => {
  dropdownTrigger.addEventListener("click", function (event) {
    const dropdownContent = dropdownTrigger.nextElementSibling;
    dropdownContent.classList.toggle("show");

    const clickedArrow = dropdownTrigger.querySelector(
      ".header__navigation__nav-bar__nav-menu__nav-item__nav-link__arrow"
    );
    if (clickedArrow) {
      changeArrow(clickedArrow);
    }
  });
});

// arrow function
function changeArrow(clickArrow) {
  // const arrow = document.querySelector(
  //   ".header__navigation__nav-bar__nav-menu__nav-item__nav-link__arrow"
  // );
  if(clickArrow){
  const arrowSrc = clickArrow.src;
  if (arrowSrc.includes("arrow-down")) {
    clickArrow.src = "./assets/images/icon-arrow-up.svg";
  } else {
    clickArrow.src = "./assets/images/icon-arrow-down.svg";
  }}
}

console.log("script running");
