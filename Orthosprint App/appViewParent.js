export default class AppViewParent {
  mainSection = document.querySelector("main");
  currentUser;
  constructor(currentUser, date) {
    this.date = date;
    this.currentUser = currentUser;
  }
}
