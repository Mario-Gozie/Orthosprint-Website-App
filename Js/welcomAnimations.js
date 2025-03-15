export default class WelcomeAnimations {
  constructor() {
    this.home = document.querySelector(".home__wrapper");
    this.homeP = home.getElementsByTagName("p");
    this.homeH = home.getElementsByTagName("h1");
    this.homeA = home.getElementsByTagName("a");

    window.addEventListener("load", function () {
      const loadArray = [...homeP, ...homeH, ...homeA];
      loadArray.forEach((la) => {
        la.style.opacity = 1;
        la.style.transform = "translateX(0)";
      });
    });
  }
}
