const hamberger = document.querySelector(
  ".navigation__hamberger"
);
const navBar = document.querySelector(".navigation__bar");

const navLink = document.querySelectorAll(
  ".navigation__bar__menu__item__link"
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
      ".navigation__arrow"
    );
    if (clickedArrow) {
      changeArrow(clickedArrow);
    }
  });
});

// arrow function
function changeArrow(clickArrow) {
  // const arrow = document.querySelector(
  //   ".navigation__arrow"
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
