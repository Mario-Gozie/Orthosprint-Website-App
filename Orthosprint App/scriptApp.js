const datePicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");

const cancelDateBtn = document.querySelector(".cancel");

console.log(datePicker);

// Showing datepicker

dateInput.addEventListener("click", () => {
  datePicker.hidden = false;
});

// Hide date picker

cancelDateBtn.addEventListener("click", () => (datePicker.hidden = true));
