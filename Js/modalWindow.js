const newsletterInput = document.querySelector(".newsletter__input");
const newsletterForm = document.getElementById("newsletterForm");
const modalWindow = document.getElementById("modal-container");
const modalBtn = document.querySelector(".modal-button"); // Fixed selector

// console.log(newsletterForm);

const form = document.querySelector(".contact_form");

const openPopup = function () {
  modalWindow.classList.add("open-popup"); // Fixed class name
};

export const openNewsletterWindow = function () {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Checking if the input value is Empty.

    if (newsletterInput.value.trim() === "") {
      alert("You have not given us any email");
    } else {
      // newsletterInput.value = "";
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
