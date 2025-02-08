import AppViewParent from "./appViewParent.js";

export default class WelcomePane extends AppViewParent {
  constructor(date) {
    super(date); // passing date to parent
    this.personalGreeting = this.mainSection.querySelector(".Personal-welcome");
    this.date = date;
    this.hour = null;

    this.setDateAndHour(date);
    console.log(this.hour);
  }

  setDateAndHour(date) {
    this.date = date; // Store the date
    this.updateHour(); // Set the initial hour

    // Update hour every second
    setInterval(() => {
      this.updateHour(); // Update the hour every second
    }, 1000);
  }

  updateHour() {
    this.hour = this.date.getHours(); // Get the current hour
    // console.log(this.hour); // Log updated hour

    // Call makeDecision whenever the hour is updated
    this.makeDecision();
  }

  makeDecision() {
    const greeting = this._getGreeting(this.hour);
    console.log(greeting); // Log the greeting based on the hour

    // You can also update the view or UI component here
    // this.personalGreeting.textContent = greeting; // Example to set greeting in the UI
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

  //   _generateWelcome(currentUser) {
  //     return `${this._getGreeting(this.hour)} ${currentUser.firstname}`;
  //   }

  _generateWelcomeDate(stringDate) {
    return `<p>${stringDate.dayString}, ${stringDate.monthString} ${stringDate.dayNumber}, ${stringDate.yearNumber}</p>`;
  }

  //   RenderNameAndGreeting() {
  //     // this._generateWelcome(this.currentUser);
  //     this._generateWelcomeDate();
  //   }

  //   // Example usage
  //   // const today = new Date();
  //   console.log(today);
  //   const dateParts = extractDateParts(today);
  //   console.log(dateParts);

  //   extractDateParts() {}
}

// export default new WelcomePane();
