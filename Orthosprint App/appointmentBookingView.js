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

    const BookedDate = appointmentInfo.get("date");
    const service = appointmentInfo.get("service");

    return {
      bookedDate,
      service,
      bookedTime: this.selectedTime, // Directly selection time
    };
  }

  _validateAppointmentDetails(appointmentDetails) {
    const { bookedDate, service, bookedTime } = appointmentDetails;
    return bookedDate && service && bookedTime;
  }

  _bookingAppointments(event) {
    event.preventDefault();
    const appointmentDetails = this._getAppointmentDetail(this.appointmentForm);

    if (!this._validateAppointmentDetails(appointmentDetails)) {
      alert("All field is required to book an Appointment");
      return;
    } else {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0"); // The padding is used to make sure the day is in two digits.
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are Zero based.
      const year = today.getFullYear();
      appointmentDetails["bookingDate"] = `${year}-${month}-${day}`;
      console.log(appointmentDetails);

      // THE CONTROLLER FUNCTION IS CALLED HERE.
      this.controller.HandlingBookings({
        bookingDate: appointmentDetails.bookingDate,
        bookedDate: appointmentDetails.bookedDate,
        service: appointmentDetails.service,
        bookedTime: appointmentDetails.bookedTime,
      });

      // bookings will have TODAYS DATE, BOOKINGDATE, SERVICE, BOOKINGTIME, STATE
      this.appointmentForm.reset();
      // you will need to remove the selected class and also hide the time frame. becuase clearing the form alone cannot do that.
    }

    console.log("money");
  }
}

// export default new BookingAppointmentView();
