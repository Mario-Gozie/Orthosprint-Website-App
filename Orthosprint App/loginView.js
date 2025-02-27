class LoginView {
  constructor() {
    this.usernameEmailContainer = document.querySelector(".username");
    this.loginSection = document.querySelector(".login-section");
    this.password = document.querySelector(".password");
    this.togglePasswordIcon = document.querySelector(".toggle-password");
    this.loginForm = document.querySelector(".login-form");

    this.loginForm.addEventListener("submit", (e) => this._loginEvent(e));

    this._showPassword();
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

  _loginEvent(event) {
    event.preventDefault();
    const loginFormDetail = this.gettingLoginValue(this.loginForm);

    if (!this.validatinForEmptyValues(loginFormDetail)) {
      alert("All Detail needs to be filled before proceding with login");
      return;
    } else {
      return loginFormDetail;
    }
  }

  // LOGIN ACTIONS

  _loginEvent(event) {
    event.preventDefault();

    const formData = new FormData(this.loginForm);

    const identifier = formData.get("usernameEmail");
    const IdentifierPassword = formData.get("password");
    console.log(state.clients);
    console.log(identifier, IdentifierPassword);

    // GET USER IS A MODEL FUNCTION.
    console.log(identifier, identifier);
    getUser(identifier, IdentifierPassword);

    // REMEMBER THAT THE ACTIVE USER IS COMING FROM THE MODEL.
    // The active user is set by the get User function.
    console.log(`user`, ActiveUser);

    // Fully Implementing login process.
    if (ActiveUser) {
      console.log(ActiveUser.firstName);

      // RENDERING WELCOME PANE VIEW
      this.WelcomeView.generateWelcomeMarkup(ActiveUser, this.location);
      this.loginForm.reset();

      // Fade out the login section
      this.loginSection.style.opacity = "0";

      // After the fade-out, hide the login section and show the main section
      setTimeout(() => {
        this.loginSection.style.display = "none"; // Remove from layout
        this.mainView.show(); // Use main view to show the main section
        // DatePicker.settingMinimumDate();
      }, 1000); // Match this timeout with the transition duration
      // this.WelcomeView.renderWelcomeView();
    } else {
      alert("User not found");
      return;
    }
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
