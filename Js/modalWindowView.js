export default class ModalWindowView {
  constructor() {
    this.modalWindow = document.getElementById("modal-container");
    this.modalBtn = document.querySelector(".modal-button");
    this.popupMesageContainer = document.querySelector(
      ".popup-message-container"
    );
    this.closeModalWindow();
  }

  openPopup(value) {
    this.popupMesageContainer.innerHTML = this._generateMarkup(value);
    this.modalWindow.classList.add("open-popup"); // Fixed class name
  }

  closeModalWindow() {
    this.modalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.modalWindow.classList.remove("open-popup");
    });
  }
}
