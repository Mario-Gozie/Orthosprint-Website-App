import ModalWindowView from "./modalWindowView.js";

export default class NewsletterView extends ModalWindowView {
  constructor(controller) {
    super();
    this.controller = controller;
    this.emailInput = document.querySelector(".newsletter__input");
    this.newsletterForm = document.getElementById("newsletterForm");

    // EVENT LISTENER.
    this.addHandlerRender(this.controller.newsletterController);
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
      const email = this.emailInput.value;
      this.emailInput.value = "";
      if (email.trim() === "") {
        alert("You have not given us any email");
      } else {
        handler(email); //This handler is simply the controller function
        console.log(email);

        this.openPopup();
        this.popupMesageContainer.innerHTML = this._generateMarkup(email);
      }
    });
  }
}
