export default class DateTimeView {
  constructor(controller) {
    // ELEMENTS
    this.controller = controller;
    this.dateInput = document.getElementById("dateInput");
    this.timeContainer = document.querySelector(".times-container");
    this.DateErrorContainer = document.querySelector(".dateErrMsg");
    console.log(this.dateInput);

    // EVENT LISTENERS

    this.dateInput.addEventListener("click", () => this._revealDateInput());
    this.dateInput.addEventListener("change", () => this._handleDateChange());
  }

  _revealDateInput() {
    const today = new Date();

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1); // setting tommorrow

    const minDate = tomorrow.toISOString().split("T")[0];
    this.dateInput.setAttribute("min", minDate);
  }

  _handleDateChange() {
    const selectedDate = this.dateInput.value;
    const availableTimes =
      this.controller.getAvailablebookingTimes(selectedDate); // CALL THE CONTROLLER METHOD
    this._displayTimes(selectedDate, availableTimes);
  }

  _displayTimes(date, availableTimes) {
    if (!date) {
      this.timeContainer.innerHTML = "";
      this.timeContainer.hidden = true;
      return;
    }
    const selectedDate = new Date(date);
    const dateToCheck = selectedDate.getUTCDay(); // 0 = sunday, 6 = saturday
    if (dateToCheck === 0 || dateToCheck === 6) {
      this.DateErrorContainer.textContent =
        "Please we dont work on weekends, Choose a weekday*";
      this.dateInput.value = "";
      this.timeContainer.innerHTML = ""; // Clear time container
      this.timeContainer.hidden = true; // Hide time container
    } // Clear Input
    else {
      this.DateErrorContainer.textContent = ""; //Clearing the error Message container

      this.timeContainer.innerHTML = this.rendertimes(availableTimes);
      this.timeContainer.hidden = false;
    }
  }

  rendertimes(availableTimes) {
    // let selectedDate = Element.value;

    const timeArray = [
      "8AM",
      "9AM",
      "10AM",
      "11AM",
      "12AM",
      "1PM",
      "2PM",
      "3PM",
    ];

    const generatedHtml = timeArray
      .map((time) => {
        const isAvailable = availableTimes.includes(time);
        return `<button type="button" class="time-button ${
          isAvailable ? "chosen" : ""
        }" value="${time}">
        ${time}
    </button>`;
      })
      .join(" ");

    return generatedHtml;
  }
}
