class NewsletterView {
  constructor() {
    this.emailInput = document.querySelector(".newsletter__input");
    this.newsletterForm = document.getElementById("newsletterForm");
    this.modalWindow = document.getElementById("modal-container");
    this.modalBtn = document.querySelector(".modal-button");
    this.popupMesageContainer = document.querySelector(
      ".popup-message-container"
    );
  }

  getEmail() {
    return this.emailInput.value;
  }

  openPopup(value) {
    // this.modalWindow.innerHTML = "";
    this.popupMesageContainer.innerHTML = this._generateMarkup(value);
    this.modalWindow.classList.add("open-popup"); // Fixed class name
  }

  closeNewsletterWindow() {
    this.modalBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Checking if the input value is Empty.
      // console.log(e.target);
      this.modalWindow.classList.remove("open-popup");
    });
  }

  _generateMarkup(value) {
    return `
            <i class="fa-solid fa-check"></i>
            <h2>Thank You!</h2>
            <p>
              We will now keep <span>${value}</span> updated with our latest
              offers
            </p>
          `;
  }

  addHandlerRender(handler) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Checking if the input value is Empty.
      const email = this.getEmail();
      this.emailInput.value = "";
      if (email.trim() === "") {
        alert("You have not given us any email");
      } else {
        this.openPopup(email);
        handler(email); //This handler is simply the controller function
      }
    });
  }
}

export default new NewsletterView();
