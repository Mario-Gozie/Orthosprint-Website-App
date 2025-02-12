export class DatePicker {
  controller(date) {
    this.date = date;
    this.dateInput = document.getElementById("dateInput");
    this.settingMinimumDate();
  }

  settingMinimumDate() {
    // The date will be current date
    const tomorrow = new Date(this.date);

    tomorrow.setDate(date.getDate() + 1); // setting tommorrow

    const minDate = tomorrow.toISOString().split("T")[0];
    this.dateInput.setAttribute("min", minDate);
  }
}
