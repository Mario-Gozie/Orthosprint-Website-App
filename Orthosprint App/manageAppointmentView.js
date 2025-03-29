import AllAppointmentContainer from "./allAppointmentContainer";

export default class ManageAppointmentView extends AllAppointmentContainer {
  constructor() {
    super();
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
