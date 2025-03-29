export default class ManageAppointmentView {
  constructor() {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
  }

  appointmentViewEvent() {
    this.allApointmentsContainer.addEventListener("click", (e) => {
      if (e.target.matches(".cancel-btn")) {
        // cancelation Actions
      } else {
        //barcode actions
      }
    });
  }
}
