export default class AppViewParent {
  mainSection = document.querySelector("main");
  userInfoContainer = document.querySelector(".Personal-welcome"); // Select where to render
  currentUser;
  constructor(currentUser, date) {
    this.date = date;
    this.currentUser = currentUser;

    console.log(this.currentUser);
  }

  getCurrentUserFirstName() {
    return this.currentUser.getFirstName(); // Access firstName using the getter
  }

  renderUserInfo() {
    userInfoContainer.textContent = `Welcome, ${this.getCurrentUserFirstName()}!`; // Update the content
  }
}
