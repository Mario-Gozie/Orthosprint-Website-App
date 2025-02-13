// import AppViewParent from "./appViewParent.js";

// export default class AppBooking extends AppViewParent {
//   constructor() {
//     super();
//     this.datePicker = this.mainSection.querySelector(".datepicker");
//     this.dateInput = this.mainSection.querySelector(".date-input");
//     this.yearInput = this.datePicker.querySelector(".year-input");
//     this.monthInput = this.datePicker.querySelector(".month-input");
//     this.cancelDateBtn = this.datePicker.querySelector(".cancel");
//     this.applyBtn = this.datePicker.querySelector(".apply");
//     this.dates = this.datePicker.querySelector(".dates");
//     this.dateNextBtn = this.datePicker.querySelector(".next");
//     this.datePrevBtn = this.datePicker.querySelector(".prev");
//     this.date;
//     this.month = this.getMonth();
//     this.year = this.getYear();
//     this.openDatePane();
//     this.closeDatePane();
//     this.applyDate();
//     this.nextButtonClick();
//     this.previousButtonClick();
//   }

//   getYear() {
//     return this.date.getFullYear(); // Extract the year from the inherited date
//   }

//   getMonth() {
//     return this.date.getMonth();
//   }

//   openDatePane() {
//     this.dateInput.addEventListener("click", () => {
//       this.datePicker.hidden = false;
//     });
//   }

//   closeDatePane() {
//     this.cancelDateBtn.addEventListener(
//       "click",
//       () => (this.datePicker.hidden = true)
//     );
//   }

//   applyDate() {
//     this.applyBtn.addEventListener("click", () => {
//       // Set up the whole apply functionality later
//       // setting date to US standard
//       this.dateInput.value = selectedDate.toLocaleDateString("en-Us", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//       });
//       //hide datepicker
//       this.datePicker.hidden = true;
//     });
//   }

//   nextButtonClick() {
//     this.dateNextBtn.addEventListener("click", () => {
//       if (month === 11) year++;
//       month = (month + 1) % 12;
//       this.displayDates();
//     });
//   }

//   previousButtonClick() {
//     this.datePrevBtn.addEventListener("click", () => {
//       if (this.month === 0) this.year--;
//       this.month = (this.month - 1 + 12) % 12;
//       this.displayDates();
//     });
//   }

//   monthChange() {
//     this.monthInput.addEventListener("change", () => {
//       this.month = monthInput.selectedIndex;
//       this.displayDates();
//     });
//   }

//   yearChange() {
//     yearInput.addEventListener("change", () => {
//       this.year = yearInput.value;
//       displayDates();
//     });
//   }

//   updateYearMonth = (e) => {
//     this.monthInput.selectedIndex = this.month; //adjusting the index of a drop down element.
//     this.yearInput.value = this.year;
//   };

//   displayDates = () => {
//     // update year month
//     this.updateYearMonth();

//     //clear he dates content

//     this.dates.innerHTML = "";

//     // display the last week of the previous month

//     // get the last date of previous
//     const lastofPreviousMonth = new Date(this.year, this.month, 0);

//     for (let i = 0; i <= lastofPreviousMonth.getDay(); i++) {
//       const text =
//         lastofPreviousMonth.getDate() - lastofPreviousMonth.getDay() + i;
//       const button = createButton(text, true, -1);

//       dates.appendChild(button);
//     }

//     // display the current month

//     // get last day of the month
//     const lastOfMonth = new Date(year, month + 1, 0);
//     console.log(lastOfMonth.toDateString());

//     for (let i = 1; i <= lastOfMonth.getDate(); i++) {
//       const button = this.createButton(i, false);
//       button.addEventListener("click", handleDateClick);
//       this.dates.appendChild(button);
//     }

//     // display the first week of next month

//     const firstOfNextMonth = new Date(year, month + 1, 1);

//     for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
//       const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
//       const button = this.createButton(text, true, 1);
//       this.dates.appendChild(button);
//     }
//   };

//   createButton = (text, isDisabled = false, type = 0) => {
//     const currentDate = new Date();

//     // deternube the date to compare based on the button type

//     let comparisonDate = new Date(this.year, this.month + type, text);

//     // checking if the current date is the date today
//     const isToday =
//       currentDate.getDate() === text &&
//       currentDate.getFullYear() === year &&
//       currentDate.getMonth() === month;

//     // Checking if the current button is selelcted

//     const selected = this.date.getTime() === comparisonDate.getTime();

//     const button = document.createElement("button");
//     button.textContent = text;
//     button.disabled = isDisabled;
//     button.classList.toggle("today", isToday && !isDisabled);
//     button.classList.toggle("selected", selected);
//     return button;
//   };
// }

//get the input
// let checkedDate = "2025-02-26";
// const timeArray = ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM"];

// customerArray = [
//   { "2025-02-26": ["8AM", "9AM", "10AM"] },
//   { "2025-02-18": ["11AM", "10AM", "12PM"] },
// ];

// let matchingDayArray = [];

// if (customerArray[checkedDate]) {
//   matchingDayArray = [...customerArray[checkedDate]];
// }

// const generatedHtml = timeArray
//   .map((time) => {
//     if (matchingDayArray.includes(time)) {
//       `<button class="time-button chosen" value="8AM">
//       8AM
//     </button>;`;
//     } else
//       `<button class="time-button" value="3PM">
//       3PM
//     </button>;`;
//   })
//   .join(" ");

// THIS CODE WILL TACKLE AVAILABLE DATES ISSUE

let checkedDate = "2025-02-26"; // get selected date.
const timeArray = ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM"];

const customerArray = [
  { "2025-02-26": ["8AM", "9AM", "10AM"] },
  { "2025-02-18": ["11AM", "10AM", "12PM"] },
];

let matchingDayArray = [];

// Find the matching day array for the checked date
customerArray.forEach((customer) => {
  // Check if the current customer object contains the checked date
  if (customer[checkedDate]) {
    // Assign the available times to matchingDayArray
    matchingDayArray = customer[checkedDate];
  }
});

// Generate HTML buttons based on availability
const generatedHtml = timeArray
  .map((time) => {
    // Check if the current time is in the matchingDayArray
    if (matchingDayArray.includes(time)) {
      // Return button with 'chosen' class if available
      return `<button class="time-button chosen" value="${time}">
          ${time}
        </button>`;
    } else {
      // Return button without 'chosen' class if not available
      return `<button class="time-button" value="${time}">
          ${time}
        </button>`;
    }
  })
  .join(" ");

// Output the generated HTML
console.log(generatedHtml);

////// AVAILABLE DATE ISSUES SETTLED ABOVE.

// const selectedDateObject = customerArray.find((cus) => checkedDate in cus);
// timeArray.forEach(()=>)

const datePicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");
const yearInput = datePicker.querySelector(".year-input");
const monthInput = datePicker.querySelector(".month-input");
const cancelDateBtn = datePicker.querySelector(".cancel");
const applyBtn = datePicker.querySelector(".apply");
const dates = datePicker.querySelector(".dates");
const dateNextBtn = datePicker.querySelector(".next");
const datePrevBtn = datePicker.querySelector(".prev");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

console.log(datePicker);

// Showing datepicker

dateInput.addEventListener("click", () => {
  datePicker.hidden = false;
});

// Hide date picker

cancelDateBtn.addEventListener("click", () => (datePicker.hidden = true));

// Apply button commmands

applyBtn.addEventListener("click", () => {
  // Set up the whole apply functionality later
  // setting date to US standard
  dateInput.value = selectedDate.toLocaleDateString("en-Us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  //hide datepicker
  datePicker.hidden = true;
});

// Handle next month nav

dateNextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

// Handle next month nav

datePrevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

//handling month input change

monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});

// Handling year input change.
yearInput.addEventListener("change", () => {
  year = yearInput.value;
  displayDates();
});

const updateYearMonth = (e) => {
  monthInput.selectedIndex = month; //adjusting the index of a drop down element.
  yearInput.value = year;
};
// Practicing with dates

// console.log(new Date().toDateString());
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth()); // Months are zero based in Javascript. so January is 0 while february is 1
// console.log(new Date().getDate());
// console.log(new Date().getDay()); // days are also zero based. starting with 0 for sundays.

// // Specifying a specific date

// console.log(new Date(2024, 1, 1).toDateString());
// console.log(new Date(2024, 1, 0).toDateString());

const handleDateClick = (e) => {
  const button = e.target;

  //remove the selected class from the other buttons

  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");

  // add the "selected" class to the current button;

  button.classList.add("selected");

  // set the selected date

  selectedDate = new Date(year, month, parseInt(button.textContent));
};

// render the dates in the calendar

const displayDates = () => {
  // update year month
  updateYearMonth();

  //clear he dates content

  dates.innerHTML = "";

  // display the last week of the previous month

  // get the last date of previous
  const lastofPreviousMonth = new Date(year, month, 0);

  for (let i = 0; i <= lastofPreviousMonth.getDay(); i++) {
    const text =
      lastofPreviousMonth.getDate() - lastofPreviousMonth.getDay() + i;
    const button = createButton(text, true, -1);

    dates.appendChild(button);
  }

  // display the current month

  // get last day of the month
  const lastOfMonth = new Date(year, month + 1, 0);
  console.log(lastOfMonth.toDateString());

  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const button = createButton(i, false);
    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  // display the first week of next month

  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
    const button = createButton(text, true, 1);
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, type = 0) => {
  const currentDate = new Date();

  // deternube the date to compare based on the button type

  let comparisonDate = new Date(year, month + type, text);

  // checking if the current date is the date today
  const isToday =
    currentDate.getDate() === text &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month;

  // Checking if the current button is selelcted

  const selected = selectedDate.getTime() === comparisonDate.getTime();

  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday && !isDisabled);
  button.classList.toggle("selected", selected);
  return button;
};

console.log(displayDates());
