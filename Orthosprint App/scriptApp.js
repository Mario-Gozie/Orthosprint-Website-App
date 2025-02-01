const datePicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");

console.log(datePicker);

// Showing datepicker

dateInput.addEventListener("click", () => {
  datePicker.hidden = false;
});
