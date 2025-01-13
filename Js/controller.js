import view from "./view.js";

const menuOpen = document.querySelector(".menu__button");
const menuClose = document.querySelector(".close__button");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav__bar");

// Opeining Menu
menuOpen.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.add("sidebar__active");
});

// Closing Menu
menuClose.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.remove("sidebar__active");
});

// Activating Smooth Scrolling this is done with event bubbling

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav__item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  }
});

// implementing the click function for founder

const founderBtn = document.querySelectorAll(".founder__btn");

founderBtn.forEach((fb) => {
  fb.addEventListener("click", function (e) {
    e.preventDefault();
    const targetData = fb.dataset.tab;

    // Check if the button was previously active
    const wasActive = fb.classList.contains("founder__active");
    // console.log(wasActive);

    // Remove active classes from all buttons and descriptions
    founderBtn.forEach((fn) => fn.classList.remove("founder__active"));
    document
      .querySelectorAll(`.hidden`)
      .forEach((hi) => hi.classList.remove("active"));

    // If the button was previously active, remove both classes
    if (wasActive) {
      fb.classList.remove("founder__active");
      document
        .querySelector(`.description__${targetData}`)
        .classList.remove("active");
    } else {
      // If it was not active, add the active classes
      fb.classList.add("founder__active");
      document
        .querySelector(`.description__${targetData}`)
        .classList.add("active");
    }
  });
});

// IMPLEMENTING REVEALING OF HOME PAGE

const home = document.querySelector(".home__wrapper");
const homeP = home.getElementsByTagName("p");
const homeH = home.getElementsByTagName("h1");
const homeA = home.getElementsByTagName("a");

window.addEventListener("load", function () {
  const loadArray = [...homeP, ...homeH, ...homeA];
  loadArray.forEach((la) => {
    la.style.opacity = 1;
    la.style.transform = "translateX(0)";
  });
});

// WORK ON MODAL WINDOW

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close__modal");
const submitNewsletter = document.querySelector(".newsletter__btn");
