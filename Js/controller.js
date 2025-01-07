import view from "./view.js";

const menuOpen = document.querySelector(".menu__button");
const sidebar = document.querySelector(".sidebar");

menuOpen.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.add("sidebar__active");
});

// const init = function () {
//   console.log(view.menuClose);
// };

// init();
