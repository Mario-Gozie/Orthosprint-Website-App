export default class AppointmentBookingView {
  constructor() {
    this.selectedTime = null;
    this.timeContainer = document.querySelector(".times-container");
    this.appointmentForm = document.querySelector(".appointment-booking-form");
    this.timeContainer.addEventListener("click", (e) =>
      this.handleTimeClick(e)
    );
    this.appointmentForm.addEventListener("submit", (e) => {
      this._bookingAppointments(e);
    });
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

  getAppointmentDetail(AppointmentForm) {
    const appointmentInfo = new FormData(AppointmentForm);

    const appointmentDate = appointmentInfo.get("date");
    const appointmentService = appointmentInfo.get("service");

    return {
      appointmentDate,
      appointmentService,
      chosenAppointmentTime: this.selectedTime, // Directly selection time
    };
  }

  validateAppointmentDetails(appointmentDetails) {
    const { appointmentDate, appointmentService, chosenAppointmentTime } =
      appointmentDetails;
    return appointmentDate && appointmentService && chosenAppointmentTime;
  }

  _bookingAppointments(event) {
    event.preventDefault();
    const appointmentDetails = this.getAppointmentDetail(this.appointmentForm);

    if (!this.validateAppointmentDetails(appointmentDetails)) {
      alert("All field is required to book an Appointment");
      return;
    } else {
      console.log(appointmentDetails);
      this.appointmentForm.reset();
      // bookings will have TODAYS DATE, BOOKINGDATE, SERVICE, BOOKINGTIME, STATE

      // you will need to remove the selected class and also hide the time frame. becuase clearing the form alone cannot do that.
    }

    console.log("money");
  }
}

// export default new BookingAppointmentView();
