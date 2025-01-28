class regView {
  constructor() {
    this.registerationForm = document.getElementById("Registeration__form");
  }

  regClient(handler) {
    this.registerationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(this);
      console.log(data);

      const firstName = data.get("firstName");
      const lastName = data.get("lastName");
      const address = data.get("address");
      const phoneNumber = data.get("phoneNumber");
      const username = data.get("username");
      const email = data.get("email");
      const password = data.get("password");
      const confirmPassword = data.get("confirmPassword");

      const gender = data.get("gender");

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again");
        return;
      }

      //get the newID
      // use a constructor function

      handler(
        firstName,
        lastName,
        address,
        phoneNumber,
        username,
        email,
        password,
        gender
      );
    });
  }
}

export default new regView();

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close__modal");
// const registerationForm = document.getElementById("Registeration__form");

// console.log(modal, overlay, btnCloseModal, registerationForm);

// registerationForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden__modal");
//   overlay.classList.remove("hidden__overlay");
//   alert("money");
// });
