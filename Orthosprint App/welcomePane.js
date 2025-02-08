// import { LoginInstance } from "./login";

class WelcomePane extends LoginDetail {
  constructor() {
    super();
  }
  getUser() {
    console.log(LoginInstance.currentUser);
  }
}

export default new WelcomePane();
