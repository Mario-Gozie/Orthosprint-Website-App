import ModalWindowView from "./modalWindowView.js";

export default class ContactView extends ModalWindowView {
  constructor(controller) {
    super();
    this.controller = controller;
    this.contactForm = document.querySelector(".contact_form");
    this.submitForm(this.controller.enquiresController);
  }

  // You neeed to work on changing values of this markup.
  _generateMarkup(name, email) {
    return `
            <i class="fa-solid fa-check"></i>
            <h2>Thank You!</h2>
            <p>
              We’ll reply to ${name} at ${email} shortly.
            </p>
          `;
  }

  submitForm(handler) {
    this.contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const regForm = new FormData(this.contactForm);
      const name = regForm.get("name");
      const email = regForm.get("email");
      const message = regForm.get("message");

      if (name && email && message) {
        console.log(name, email, message);
        this.contactForm.reset();
        handler(name, email, message);

        this.openPopup();
        this.popupMesageContainer.innerHTML = this._generateMarkup(name, email);
      } else {
        console.log("all fields needs to be filled");
      }
    });
  }
}
