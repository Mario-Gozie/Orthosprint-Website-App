export default class ContactView {
  constructor(controller) {
    this.controller = controller;
    this.contactForm = document.querySelector(".contact_form");
  }

  // You neeed to work on changing values of this markup.
  generateMarkup() {
    return `
            <i class="fa-solid fa-check"></i>
            <h2>Thank You!</h2>
            <p>
              We will now keep <span>${value}</span> updated with our latest
              offers
            </p>
          `;
  }

  submitingForm(handler) {
    const regForm = new FormData(this.contactForm);
    const name = regForm.get("name");
    const email = regForm.get("email");
    const message = regForm.get("message");

    if (name && email && message) {
      console.log(name, email, message);
      handler();
    } else {
      console.log("all fields needs to be filled");
    }
  }
}
