export default class AppointmentBookingView {
  constructor(controller) {
    this.controller = controller;
    this.selectedTime = null;
    this.timeContainer = document.querySelector(".times-container");
    this.appointmentForm = document.querySelector(".appointment-booking-form");
    this.timeContainer.addEventListener("click", (e) =>
      this._handleTimeClick(e)
    );
    this.appointmentForm.addEventListener("submit", (e) => {
      this._bookingAppointments(e);
    });
  }

  _handleTimeClick(event) {
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

  _getAppointmentDetail(AppointmentForm) {
    const appointmentInfo = new FormData(AppointmentForm);

    const appointmentDate = appointmentInfo.get("date");
    const appointmentService = appointmentInfo.get("service");

    return {
      appointmentDate,
      appointmentService,
      chosenAppointmentTime: this.selectedTime, // Directly selection time
    };
  }

  _validateAppointmentDetails(appointmentDetails) {
    const { appointmentDate, appointmentService, chosenAppointmentTime } =
      appointmentDetails;
    return appointmentDate && appointmentService && chosenAppointmentTime;
  }

  _bookingAppointments(event) {
    event.preventDefault();
    const appointmentDetails = this._getAppointmentDetail(this.appointmentForm);

    if (!this._validateAppointmentDetails(appointmentDetails)) {
      alert("All field is required to book an Appointment");
      return;
    } else {
      console.log(appointmentDetails);

      // bookings will have TODAYS DATE, BOOKINGDATE, SERVICE, BOOKINGTIME, STATE
      this.appointmentForm.reset();
      // you will need to remove the selected class and also hide the time frame. becuase clearing the form alone cannot do that.
    }

    console.log("money");
  }
}

// export default new BookingAppointmentView();
