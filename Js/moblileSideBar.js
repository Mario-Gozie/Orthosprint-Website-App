export default class MobileSideBar {
  constructor() {
    this.menuOpen = document.querySelector(".menu__button");
    this.menuClose = document.querySelector(".close__button");
    this.sidebar = document.querySelector(".sidebar");
    this.navbar = document.querySelector(".nav__bar");

    // Opeining Menu
    this.menuOpen.addEventListener("click", (e) => {
      e.preventDefault();
      this.sidebar.classList.add("sidebar__active");
    });

    // Closing Menu
    this.menuClose.addEventListener("click", (e) => {
      e.preventDefault();
      this.sidebar.classList.remove("sidebar__active");
    });
  }
}
