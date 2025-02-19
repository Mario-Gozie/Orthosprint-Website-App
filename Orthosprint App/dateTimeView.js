class DateTimeView {
  controller() {
    this.rendertimes();
  }

  // chosenDate, BookingsArray

  // rendertimes() {
  //   return `<button class="time-button chosen" value="8AM">8AM</button
  //           ><button class="time-button " value="9AM">9AM</button
  //           ><button class="time-button" value="10AM">10AM</button
  //           ><button class="time-button" value="11AM">11AM</button
  //           ><button class="time-button chosen" value="12PM">12AM</button
  //           ><button class="time-button" value="1PM">1PM</button
  //           ><button class="time-button selected-time" value="2PM">2PM</button
  //           ><button class="time-button" value="3PM">3PM</button>`;
  // }

  rendertimes(state, Element) {
    // DateTimeArray.map(()=>
    //   if
    // )
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

    // const customerArray = [
    //   { "2025-02-26": ["8AM", "9AM", "10AM"] },
    //   { "2025-02-18": ["11AM", "10AM", "12PM"] },
    // ];

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

    return generatedHtml;

    // Output the generated HTML
    console.log(generatedHtml);
    // return `<button class="time-button chosen" value="8AM">8AM</button
    //         ><button class="time-button " value="9AM">9AM</button
    //         ><button class="time-button" value="10AM">10AM</button
    //         ><button class="time-button" value="11AM">11AM</button
    //         ><button class="time-button chosen" value="12PM">12AM</button
    //         ><button class="time-button" value="1PM">1PM</button
    //         ><button class="time-button selected-time" value="2PM">2PM</button
    //         ><button class="time-button" value="3PM">3PM</button>`;
  }
}

export default new DateTimeView();
