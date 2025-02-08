import AppViewParent from "./appViewParent.js";

class Login extends AppViewParent {
  //I exported this class because I want another function to inherit the data in it.
  usernameEmailContainer = document.querySelector(".username");
  loginSection = document.querySelector(".login-section");
  password = document.querySelector(".password");
  togglePasswordIcon = document.querySelector(".toggle-password");
  loginForm = document.querySelector(".login-form");
  // currentUser;

  constructor() {
    super();
    this.OnloginEvent();
    this.showPassword();
  }

  OnloginEvent(handler) {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(this.loginForm);

      const identifier = formData.get("usernameEmail");
      const IdentifierPassword = formData.get("password");
      const user = handler(identifier, IdentifierPassword);
      console.log(`user`, user);

      // Fully Implementing login process.
      if (user) {
        this.setCurrentUser(user); // Set currentUser in AppViewParent
        console.log("Current User", this.currentUser);
        // this.currentUser = user;
        // console.log("Current User", this.currentUser);

        this.loginForm.reset();

        // Fade out the login section
        this.loginSection.style.opacity = "0";

        // After the fade-out, hide the login section and show the main section
        setTimeout(() => {
          this.loginSection.style.display = "none"; // Remove from layout
          this.mainSection.style.opacity = "1"; // Fade in main section
          this.mainSection.style.display = "block";
        }, 1000); // Match this timeout with the transition duration

        console.log(this.currentUser);
      } else {
        alert("User not found");
        return;
      }
    });
  }

  showPassword() {
    document.addEventListener("DOMContentLoaded", () => {
      this.togglePasswordIcon.addEventListener("click", () => {
        // Toggle the input type
        const type =
          this.password.getAttribute("type") === "password"
            ? "text"
            : "password";
        this.password.setAttribute("type", type);

        // Toggle the icon classes
        this.togglePasswordIcon.classList.toggle("fa-eye"); // Show open eye
        this.togglePasswordIcon.classList.toggle("fa-eye-slash"); // Show closed eye
      });
    });
  }
}

export default new Login(); // I exported this instance because I want to run the code within it in the constructor.
