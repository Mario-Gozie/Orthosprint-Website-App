import view from "./view.js";

const menuOpen = document.querySelector(".menu__button");
const menuClose = document.querySelector(".close__button");
const sidebar = document.querySelector(".sidebar");

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
