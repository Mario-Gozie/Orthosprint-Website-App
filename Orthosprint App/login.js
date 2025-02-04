class Login {
  usernameEmailValue = document.querySelector(".username");

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
    });
  }
}

export default new Login();
