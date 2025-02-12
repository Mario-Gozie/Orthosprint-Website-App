class DatePicker {
  controller() {
    this.dateInput = document.getElementById("dateInput");
  }

  _settingMinimuDate(date) {
    // The date will be current date
    const tomorrow = new Date(date);

    tomorrow.setDate(date.getDate() + 1); // setting tommorrow

    const minDate = tomorrow.toISOString().split("T")[0];
    dateInput.setAttribute("min", minDate);
  }
}
