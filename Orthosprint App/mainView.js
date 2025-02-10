// mainView.js
export default class MainView {
  constructor() {
    this.mainSection = document.querySelector("main");
  }

  show() {
    this.mainSection.style.display = "block";
    this.mainSection.style.opacity = "1";
  }

  hide() {
    this.mainSection.style.display = "none";
    this.mainSection.style.opacity = "0";
  }

  // Other methods to manage the main section
}
