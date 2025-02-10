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

      //   this.renderWelcomeGreeting();
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

  _extractDateParts(date) {
    const optionsDay = { weekday: "long" }; // String part of the day
    const optionsMonth = { month: "long" }; // String part of the month
    const optionsDate = { day: "numeric" }; // Numeric part of the day
    const optionsYear = { year: "numeric" }; // Year

    const dayString = date.toLocaleDateString("en-US", optionsDay);
    const monthString = date.toLocaleDateString("en-US", optionsMonth);
    const dayNumber = date.toLocaleDateString("en-US", optionsDate);
    const yearNumber = date.toLocaleDateString("en-US", optionsYear);

    return {
      dayString,
      monthString,
      dayNumber,
      yearNumber,
    };
  }

  generateWelcomeMarkup(currentUser) {
    const welcomeDate = this._extractDateParts(this.date);

    this.WelcomeSection.innerHTML = `<div class="welcome-section-wrapper">
          <div class="Personal-welcome">
            <h1>${this._greetingDecision()}, ${currentUser.firstName}</h1>
            <p>${welcomeDate.dayString}, ${welcomeDate.monthString} ${
      welcomeDate.dayNumber
    }, ${welcomeDate.yearNumber}</p>
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
