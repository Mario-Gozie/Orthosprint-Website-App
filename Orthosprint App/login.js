class Login {
  usernameEmailContainer = document.querySelector(".username");

  loginSection = document.querySelector(".login-section");

  mainSection = document.querySelector("main");
  password = document.querySelector(".password");
  togglePasswordIcon = document.querySelector(".toggle-password");

  loginForm = document.querySelector(".login-form");

  // curentUserData = this.getCurrentUser();

  constructor() {
    // this.OnloginEvent(handler);
    this.showPassword();
  }

  // Authentication(){

  // }

  OnloginEvent(handler) {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // this.getCurrentUser().password.value
      console.log(this.loginForm);

      const formData = new FormData(this.loginForm);

      console.log(formData.get("usernameEmail"));
      console.log(formData.get("password"));

      const identifier = formData.get("usernameEmail");
      const IdentifierPassword = formData.get("password");
      const user = handler(identifier, IdentifierPassword);

      if (user) {
        console.log(`user found`, user);
      } else {
        alert("User not found");
        return;
      }
      // console.log(user);

      // formData.forEach((value, key) => {
      //   console.log(`${key}:${value}`);
      // });

      this.loginForm.reset();

      // Fade out the login section
      this.loginSection.style.opacity = "0";

      // After the fade-out, hide the login section and show the main section
      setTimeout(() => {
        this.loginSection.style.display = "none"; // Remove from layout
        this.mainSection.style.opacity = "1"; // Fade in main section
        this.mainSection.style.display = "block";
      }, 1000); // Match this timeout with the transition duration
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

export default new Login();
