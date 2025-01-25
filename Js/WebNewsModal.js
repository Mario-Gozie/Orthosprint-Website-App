class NewsletterView {
  constructor() {
    this.emailInput = document.querySelector(".newsletter__input");
    this.newsletterForm = document.getElementById("newsletterForm");
    this.modalWindow = document.getElementById("modal-container");
    this.modalBtn = document.querySelector(".modal-button");
  }

  getEmail() {
    return this.emailInput.value;
  }

  openPopup() {
    modalWindow.classList.add("open-popup"); // Fixed class name
  }

  closeNewsletterWindow() {
    modalBtn.addEventListener("click", function () {
      modalWindow.classList.remove("open-popup");
    });
  }
}

const newsletterInput = document.querySelector(".newsletter__input");
const newsletterForm = document.getElementById("newsletterForm");
const modalWindow = document.getElementById("modal-container");
const modalBtn = document.querySelector(".modal-button"); // Fixed selector

// console.log(newsletterForm);

export const NewsletterEmail = () => newsletterInput.value; // Capturing Email

const openPopup = function () {
  modalWindow.classList.add("open-popup"); // Fixed class name
};

export const openNewsletterWindow = function () {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Checking if the input value is Empty.

    if (newsletterInput.value.trim() === "") {
      alert("You have not given us any email");
    } else {
      console.log(NewsletterEmail);

      newsletterInput.value = "";
      openPopup();
    }
  });
};

// Close modal on button click
export const closeNewsletterWindow = function () {
  modalBtn.addEventListener("click", function () {
    modalWindow.classList.remove("open-popup");
  });
};
