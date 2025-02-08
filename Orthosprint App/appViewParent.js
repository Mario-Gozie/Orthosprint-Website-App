export default class AppViewParent {
  mainSection = document.querySelector("main");
  currentUser;
  constructor(date) {
    this.date = date;
  }

  setCurrentUser(user) {
    this.currentUser = user; // Method to set currentUser
  }
}
