class view {
  constructor() {
    this.menuOpen = document.querySelector(".menu__button");
    this.menuClose = document.querySelector(".close__button");

    // Opeining Menu
    this.menuOpen.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.add("sidebar__active");
    });

    // Closing Menu
    this.menuClose.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.remove("sidebar__active");
    });
  }
}

export default new view();
