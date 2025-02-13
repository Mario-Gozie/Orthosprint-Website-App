class BookingAppointmentView {
  constructor() {}

  checkAppointmentDetail(AppointmentForm) {
    const appointmentInfo = new FormData(AppointmentForm);

    const appointmentDate = appointmentInfo.get("date");
    const appointmentService = appointmentInfo.get("service");
    console.log(appointmentDate);
    console.log(appointmentService);
  }
}

export default new BookingAppointmentView();
