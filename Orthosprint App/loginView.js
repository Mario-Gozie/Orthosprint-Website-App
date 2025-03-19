import ModalWindow from "./modalWindow.js";

export default class LoginView extends ModalWindow {
  constructor(controller) {
    super();
    this.controller = controller;
    this.usernameEmailContainer = document.querySelector(".username");
    this.loginSection = document.querySelector(".login-section");
    this.password = document.querySelector(".password");
    this.togglePasswordIcon = document.querySelector(".toggle-password");
    this.loginForm = document.querySelector(".login-form");

    this.loginForm.addEventListener("submit", (e) => this.loginEvent(e));

    this._showPassword();
  }

  errorHTML() {
    return `<i class="fa-solid fa-circle-exclamation"></i>
    <div class="message">
      <h3>Opps!</h3>
      <p>Wrong or Incomplete detail</p>
    </div>`;
  }

  gettingLoginValue(form) {
    const formData = new FormData(form);

    const identifier = formData.get("usernameEmail");
    const IdentifierPassword = formData.get("password");
    return { identifier, IdentifierPassword };
  }

  validatinForEmptyValues(loginValues) {
    const { identifier, IdentifierPassword } = loginValues;

    return identifier && IdentifierPassword;
  }

  loginEvent(event) {
    event.preventDefault();
    const loginFormDetail = this.gettingLoginValue(this.loginForm);

    if (!this.validatinForEmptyValues(loginFormDetail)) {
      alert("All Detail needs to be filled before proceding with login");
      return;
    } else {
      this.controller.loginController(loginFormDetail);
    }
  }

  hideLoginView() {
    this.loginForm.reset();
    this.loginSection.style.opacity = "0";
    this.loginSection.style.display = "none";
  }

  _showPassword() {
    this.togglePasswordIcon.addEventListener("click", () => {
      // Toggle the input type
      const type =
        this.password.getAttribute("type") === "password" ? "text" : "password";
      this.password.setAttribute("type", type);

      // Toggle the icon classes
      this.togglePasswordIcon.classList.toggle("fa-eye"); // Show open eye
      this.togglePasswordIcon.classList.toggle("fa-eye-slash"); // Show closed eye
    });
  }
}
