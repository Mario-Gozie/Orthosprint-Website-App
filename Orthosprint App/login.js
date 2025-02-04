class Login {
  usernameEmailValue = document.querySelector(".username");

  loginSection = document.querySelector(".login-section");

  mainSection = document.querySelector("main");
  password = document.querySelector(".password");

  loginForm = document.querySelector(".login-form");

  constructor() {
    this.OnloginEvent();
  }

  OnloginEvent() {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.loginForm);

      const formData = new FormData(this.loginForm);

      console.log(formData.get("usernameEmail"));
      console.log(formData.get("password"));

      formData.forEach((value, key) => {
        console.log(`${key}:${value}`);
      });

      this.loginForm.reset();

      // Fade out the login section
      this.loginSection.style.opacity = "0";

      // After the fade-out, hide the login section and show the main section
      setTimeout(() => {
        this.loginSection.style.display = "none"; // Remove from layout
        this.mainSection.style.opacity = "1"; // Fade in main section
      }, 500); // Match this timeout with the transition duration
    });
  }
}

export default new Login();
