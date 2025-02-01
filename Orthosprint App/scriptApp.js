const datePicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");

const cancelDateBtn = document.querySelector(".cancel");
const applyBtn = document.querySelector(".apply");
const dates = document.querySelector(".dates");

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

applyBtn.addEventListener(
  "click",
  () =>
    // Set up the whole apply functionality later
    (datePicker.hidden = true)
);

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
  //clear he dates content

  dates.innerHTML = "";

  // display the last week of the previous month

  // get the last date of previous
  const lastofPreviousMonth = new Date(year, month, 0);

  for (let i = 0; i <= lastofPreviousMonth.getDay(); i++) {
    const text =
      lastofPreviousMonth.getDate() - lastofPreviousMonth.getDay() + i;
    const button = createButton(text, true, false);

    dates.appendChild(button);
  }

  // display the current month

  // get last day of the month
  const lastOfMonth = new Date(year, month + 1, 0);
  console.log(lastOfMonth.toDateString());

  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const isToday =
      selectedDate.getDate() === i &&
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month;
    const button = createButton(i, false, isToday);
    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  // display the first week of next month

  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
    const button = createButton(text, true, false);
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, isToday = false) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday);
  return button;
};

displayDates();
