class DateTimeView {
  controller() {
    this.rendertimes();
  }

  rendertimes(state, Element) {
    let selectedDate = Element.value;

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

    let matchingDayArray = [];

    // Find the matching day array for the checked date
    state.bookings.forEach((DateObj) => {
      // Check if the current customer object contains the checked date
      if (DateObj[selectedDate]) {
        // Assign the available times to matchingDayArray
        matchingDayArray = DateObj[selectedDate];
      }
    });

    // Generate HTML buttons based on availability
    const generatedHtml = timeArray
      .map((time) => {
        // Check if the current time is in the matchingDayArray
        if (matchingDayArray.includes(time)) {
          // Return button with 'chosen' class if available
          return `<button type="button" class="time-button chosen" value="${time}">
          ${time}
        </button>`;
        } else {
          // Return button without 'chosen' class if not available
          return `<button type ="button" class="time-button" value="${time}">
          ${time}
        </button>`;
        }
      })
      .join(" ");

    return generatedHtml;
  }
}

export default new DateTimeView();
