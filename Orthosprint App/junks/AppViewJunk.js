export default class AppViewWelcome {
  mainSection = document.querySelector("main");
  userInfoContainer = document.querySelector(".Personal-welcome"); // Select where to render

  constructor() {
    // this.date = date;
    // this.currentUser = currentUser;
  }

  welcomeMessage(user) {
    console.log(`<h1>Good Morning, ${user.firstName}</h1>
            <p>${user.lastName} ${user.email}</p>`);
  }

  renderUserInfo() {
    userInfoContainer.textContent = `Welcome, ${this.getCurrentUserFirstName()}!`; // Update the content
  }
}
