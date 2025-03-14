export default class WelcomeView {
  constructor() {
    this.date = new Date();
    this.hour = null;
    this._updateHour();
    this.WelcomeSection = document.querySelector(".welcome-section");
  }

  // GETTING GEOLOCATION AND LOCATION

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
    } else if (hour >= 16 && hour < 22) {
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

  generateWelcomeMarkup(currentUserUsername, location) {
    const welcomeDate = this._extractDateParts(this.date);

    this.WelcomeSection.innerHTML = `<div class="welcome-section-wrapper">
          <div class="Personal-welcome">
            <h1>${this._greetingDecision()}, ${currentUserUsername}</h1>
            <p>${welcomeDate.dayString}, ${welcomeDate.monthString} ${
      welcomeDate.dayNumber
    }, ${welcomeDate.yearNumber}</p>
          </div>
          <div class="Appointment-welcome">
            <div class="location-img-container">
              <i class="fa-solid fa-location-dot"></i>
              <p>${location}<p>
            </div>
            <p>Let's begin appointments</p>
          </div>
        </div>`;
  }
}
