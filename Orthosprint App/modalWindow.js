export default class ModalWindow {
  constructor() {
    this.modalWindowContainer = document.querySelector(".popUp-container");
    this.messageIcon = this.modalWindowContainer.querySelector("message-icon");
  }

  openModalWindow(htmlElements) {
    this.modalWindowContainer.classList.add("show-popUp"); // Add class to show the popup
    this.messageIcon.innerHTML = htmlElements;

    // Set a timeout to hide the modal after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      this.closeModalWindow(); // Call the function to hide the modal
    }, 3000);
  }

  closeModalWindow() {
    this.modalWindowContainer.classList.remove("show-popUp"); // Remove class to hide the popup
    this.modalWindowContainer.innerHTML = ""; // Optional: clear the inner HTML if desired
  }
}
