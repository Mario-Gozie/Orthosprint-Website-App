export default class WelcomeView {
  constructor() {
    this.WelcomeSection = document.querySelector(".welcome-section");
  }

  //   renderWelcomeView() {
  //      = this.generateWelcomeMarkup();
  //   }

  generateWelcomeMarkup(currentUser) {
    this.WelcomeSection.innerHTML = `<div class="welcome-section-wrapper">
          <div class="Personal-welcome">
            <h1>Good Morning, ${currentUser.firstName}</h1>
            <p>Thursday, January 30, 2025</p>
          </div>
          <div class="Appointment-welcome">
            <div class="location-img-container">
              <i class="fa-solid fa-location-pin-lock"></i>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>Welcome back to your appointments</p>
          </div>
        </div>`;
  }
}
