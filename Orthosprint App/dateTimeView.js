class DateTimeView {
  controller() {
    this.rendertimes();
  }

  // chosenDate, BookingsArray

  rendertimes() {
    return `<button class="time-button chosen" value="8AM">8AM</button
            ><button class="time-button " value="9AM">9AM</button
            ><button class="time-button" value="10AM">10AM</button
            ><button class="time-button" value="11AM">11AM</button
            ><button class="time-button chosen" value="12PM">12AM</button
            ><button class="time-button" value="1PM">1PM</button
            ><button class="time-button selected-time" value="2PM">2PM</button
            ><button class="time-button" value="3PM">3PM</button>`;
  }
}

export default new DateTimeView();
