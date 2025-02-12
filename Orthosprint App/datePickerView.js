class DatePicker {
  controller(date) {
    // this.date = date;
    // this.dateInput = document.getElementById("dateInput");
    // console.log(this.dateInput);
    // this.settingMinimumDate();
  }

  settingMinimumDate() {
    // The date will be current date
    const today = new Date();

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1); // setting tommorrow

    const minDate = tomorrow.toISOString().split("T")[0];
    this.dateInput.setAttribute("min", minDate);
  }
}

export default new DatePicker();
