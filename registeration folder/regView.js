class RegView {
  registerationForm = document.querySelector(".RegisterationForm");
  popUpContainer = document.querySelector(".popup-container");
  CloseRegModal = document.querySelector(".closeModal");
  messageContainer = document.querySelector(".message-container");

  generateHTML = function (name) {
    return `
     <h2>Thank You!</h2>
       <p>
         We now have your details <span>${name}</span>. You can now login.
       </p>`;
  };

  closePopup = function () {
    this.CloseRegModal.addEventListener("click", (e) => {
      e.preventDefault();
      this.popUpContainer.classList.remove("Open-popup");
      window.location.href = "../Orthosprint App/indexA.html";
    });
  };

  submitReg(handler) {
    this.registerationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(this.registerationForm);

      // const clientId = `CUST-`;
      const firstName = data.get("firstName");
      const lastName = data.get("lastName");
      const address = data.get("address");
      const phoneNumber = data.get("phoneNumber");
      const username = data.get("username");
      const email = data.get("email");
      const password = data.get("password");
      const confirmPassword = data.get("confirmPassword");

      const gender = data.get("gender");
      console.log(firstName);

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again");
        return;
      }

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

      this.registerationForm.reset(); //clearing all contentents in the form

      this.messageContainer.innerHTML = this.generateHTML(firstName);
      this.popUpContainer.classList.add("Open-popup");
    });
  }
}

export default new RegView();

// const registerationForm = document.querySelector(".RegisterationForm");
// const popUpContainer = document.querySelector(".popup-container");
// const CloseRegModal = document.querySelector(".closeModal");
// const messageContainer = document.querySelector(".message-container");
// console.log(CloseRegModal);

// console.log(registerationForm);

// const generateHTML = function (name) {
//   return `
//   <h2>Thank You!</h2>
//     <p>
//       We now have your details <span>${name}</span>. You can now login.
//     </p>`;
// };

// const closePopup = function () {
//   CloseRegModal.addEventListener("click", function (e) {
//     e.preventDefault();
//     popUpContainer.classList.remove("Open-popup");
//     window.location.href = "../Orthosprint App/indexA.html";
//   });
// };

// closePopup();

// const customers = [];

// console.log(customers);
// registerationForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const data = new FormData(this);
//   console.log(data);

//   const firstName = data.get("firstName");
//   const lastName = data.get("lastName");
//   const address = data.get("address");
//   const phoneNumber = data.get("phoneNumber");
//   const username = data.get("username");
//   const email = data.get("email");
//   const password = data.get("password");
//   const confirmPassword = data.get("confirmPassword");

//   const gender = data.get("gender");

//   if (password !== confirmPassword) {
//     alert("Passwords do not match. Please try again");
//     return;
//   }

//   customers.push({
//     firstName,
//     lastName,
//     address,
//     phoneNumber,
//     username,
//     email,
//     password,
//   });

//   messageContainer.innerHTML = generateHTML(firstName);
//   popUpContainer.classList.add("Open-popup");
//   console.log(customers);
// });
