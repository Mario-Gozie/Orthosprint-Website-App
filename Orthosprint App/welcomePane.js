import AppViewParent from "./appViewParent.js";

export default class WelcomePane extends AppViewParent {
  constructor(date, location) {
    super(date); // passing Date to Parent
    this.personalGreeting = this.mainSection.querySelector(".Personal-welcome");

    this.location = location;
    console.log(this.date);
    this.hour = null;
    console.log(this.personalGreeting);
  }

  updateHour() {
    setInterval(() => {
      this.hour = this.date.getHours();
    }, 1000);
  }

  generateGreetingMarkup() {
    return `${this._greetingDecision()} ${this.currentUser.firstName}`;
  }

  _greetingDecision() {
    this.updateHour();
    const greeting = this._getGreeting(this.hour);
    return greeting;
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

  renderWelcomeDate() {
    const dateString = this._extractDateParts(this.date);
    return this._generateWelcomeDate(dateString);
  }

  _generateWelcomeDate(stringDate) {
    return `<p>${stringDate.dayString}, ${stringDate.monthString} ${stringDate.dayNumber}, ${stringDate.yearNumber}</p>`;
  }
}
