export default class WelcomeView {
  constructor() {
    this.date = new Date();
    this.hour = null;
    this._updateHour();
    this.WelcomeSection = document.querySelector(".welcome-section");
  }

  _updateHour() {
    setInterval(() => {
      this.hour = new Date().getHours();

      this.renderWelcomeGreeting();
    }, 1000);
  }

  _greetingDecision() {
    return this._getGreeting(this.hour);
  }

  _getGreeting(hour) {
    if (hour >= 0 && hour < 12) {
      return `Good Morning`;
    } else if (hour >= 12 && hour < 16) {
      return `Good Afternoon`;
    } else if (hour >= 16 && hour < 20) {
      return `Good Evening`;
    } else {
      return `Good Night`;
    }
  }

  generateWelcomeMarkup(currentUser) {
    this.WelcomeSection.innerHTML = `<div class="welcome-section-wrapper">
          <div class="Personal-welcome">
            <h1>${this._greetingDecision()}, ${currentUser.firstName}</h1>
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
