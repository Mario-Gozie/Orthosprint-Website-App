export default class AppointmentBookingView {
  constructor() {
    this.timeContainer = document.querySelector(".times-container");
    this.timeContainer.addEventListener("click", (e) =>
      this.handleTimeClick(e)
    );
  }

  handleTimeClick(event) {
    if (event.target.classList.contains("time-button")) {
      event.preventDefault();
      if (event.target.classList.contains("selected-time")) {
        event.target.classList.remove("selected-time");
        this.selectedTime = null;
        console.log(this.selectedTime);
      } else {
        const allTimeButtons =
          this.timeContainer.querySelectorAll(".time-button");
        allTimeButtons.forEach((btn) => btn.classList.remove("selected-time"));

        console.log("button clicked", event.target);
        event.target.classList.add("selected-time");
        this.selectedTime = event.target.value;
        console.log(this.selectedTime);
      }
    }
  }

  checkAppointmentDetail(AppointmentForm, appointmentTime) {
    const appointmentInfo = new FormData(AppointmentForm);
    if (appointmentTime) {
      appointmentInfo.append("selectedTime", appointmentTime.value);
    }

    const appointmentDate = appointmentInfo.get("date");
    const appointmentService = appointmentInfo.get("service");
    const ChosenAppointmentTime = appointmentInfo.get("selectedTime");
    console.log(appointmentDate);
    console.log(appointmentService);
    console.log(ChosenAppointmentTime);
  }

  bookingAppointment() {}
}

// export default new BookingAppointmentView();
