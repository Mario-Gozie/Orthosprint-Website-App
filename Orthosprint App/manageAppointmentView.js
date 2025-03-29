import AllAppointmentContainer from "./allAppointmentContainer";
import QRcodeGenerator from "./qrcodeGeneration";

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
