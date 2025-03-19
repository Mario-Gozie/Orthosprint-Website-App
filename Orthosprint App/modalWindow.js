export default class ModalWindow {
  constructor() {
    this.modalWindowContainer = document.querySelector(".popUp-container");
    this.messageIcon = this.modalWindowContainer.querySelector(".message-icon");

    this.isOpen = false; // Track whether the modal is currently open

    // Close modal on button click
    this.closeButton.addEventListener("click", () => {
      this.closeModalWindow();
    });
  }

  openModalWindow(htmlElements) {
    // Always update the message
    this.messageIcon.innerHTML = htmlElements; // Update the message content

    if (!this.isOpen) {
      // If the modal is not open, show it
      this.modalWindowContainer.classList.add("show-popUp"); // Show the popup
      this.isOpen = true; // Mark modal as open

      // Optionally, set a timeout to auto-close the modal
      setTimeout(() => {
        this.closeModalWindow(); // Auto close after x seconds
      }, 3000);
    }
  }

  closeModalWindow() {
    this.modalWindowContainer.classList.remove("show-popUp"); // Hide the popup
    this.isOpen = false; // Reset the state
    this.messageIcon.innerHTML = ""; // Clear the message
  }
}
