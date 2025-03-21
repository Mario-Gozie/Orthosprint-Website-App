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
    this.modalWindow.style.display = "flex";

    this.modalWindow.classList.add("open-popup"); // Fixed class name
  }

  closeModalWindow() {
    this.modalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.modalWindow.classList.remove("open-popup");
      this.modalWindow.style.display = "none";
    });
  }
}
