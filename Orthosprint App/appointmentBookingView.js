class BookingAppointmentView {
  constructor() {}

  checkAppointmentDetail(AppointmentForm, appointmentTime) {
    const appointmentInfo = new FormData(AppointmentForm);
    if (appointmentTime) {
      appointmentInfo.append("selectedTime", appointmentTime.value);
    }

    const appointmentDate = appointmentInfo.get("date");
    const appointmentService = appointmentInfo.get("service");
    const appointmentTime = appointmentInfo.get("selectedTime");
    console.log(appointmentDate);
    console.log(appointmentService);
    console.log(appointmentTime);
  }

  bookingAppointment() {}
}

export default new BookingAppointmentView();
