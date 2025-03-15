export default class ModalWindowView {
  constructor() {
    this.modalWindow = document.getElementById("modal-container");
    this.modalBtn = document.querySelector(".modal-button");
    this.popupMesageContainer = document.querySelector(
      ".popup-message-container"
    );
  }

  closeModalWindow() {
    this.modalBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Checking if the input value is Empty.
      // console.log(e.target);
      this.modalWindow.classList.remove("open-popup");
    });
  }
}
