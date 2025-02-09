// import AppViewParent from "./appViewParent.js";

// export default class WelcomePane extends AppViewParent {
//   constructor(date, location) {
//     super(date); // passing Date to Parent
//     this.personalGreeting = this.mainSection.querySelector(".Personal-welcome");
//     // console.log(this.personalGreeting);

//     this.location = location;

//     this.hour = null;
//     this.updateHour();
//     this.renderWelcomeGreeting();
//   }

//   updateHour() {
//     setInterval(() => {
//       this.hour = new Date().getHours();

//       this.renderWelcomeGreeting();
//     }, 1000);
//   }

//   // generateGreetingMarkup() {
//   //   return `${this._greetingDecision()} ${this.currentUser.firstName}`;
//   // }

//   _greetingDecision() {
//     return this._getGreeting(this.hour);
//   }

//   _getGreeting(hour) {
//     if (hour >= 0 && hour < 12) {
//       return `Good Morning`;
//     } else if (hour >= 12 && hour < 16) {
//       return `Good Afternoon`;
//     } else if (hour >= 16 && hour < 20) {
//       return `Good Evening`;
//     } else {
//       return `Good Night`;
//     }
//   }

//   _extractDateParts(date) {
//     const optionsDay = { weekday: "long" }; // String part of the day
//     const optionsMonth = { month: "long" }; // String part of the month
//     const optionsDate = { day: "numeric" }; // Numeric part of the day
//     const optionsYear = { year: "numeric" }; // Year

//     const dayString = date.toLocaleDateString("en-US", optionsDay);
//     const monthString = date.toLocaleDateString("en-US", optionsMonth);
//     const dayNumber = date.toLocaleDateString("en-US", optionsDate);
//     const yearNumber = date.toLocaleDateString("en-US", optionsYear);

//     return {
//       dayString,
//       monthString,
//       dayNumber,
//       yearNumber,
//     };
//   }

//   // renderWelcomeDate() {
//   //   const dateString = this._extractDateParts(this.date);
//   //   return this._generateWelcomeDate(dateString);
//   // }

//   renderWelcomeGreeting() {
//     this.personalGreeting.innerHTML = this.gernerateWelcomeGreeting();
//   }

//   gernerateWelcomeGreeting() {
//     // Generate the greeting and update the personalGreeting element
//     const stringDate = this._extractDateParts(this.date); // Extract date parts
//     this.personalGreeting.innerHTML = `
//        <h1>${this._greetingDecision()} ${this.currentUser.firstName}</h1>
//        <p>${stringDate.dayString}, ${stringDate.monthString} ${
//       stringDate.dayNumber
//     }, ${stringDate.yearNumber}</p>
//      `;
//   }
// }
