export default class QRcodeGenerator {
  constructor(controller) {
    this.controller = controller;
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
    this.generateBarcode();
  }

  generateBarcode() {
    this.allApointmentsContainer.addEventListener("click", (e) => {
      const appointmentContainer = e.target.closest(".appointment-container"); // This will bubble events up to parent
      if (appointmentContainer) {
        console.log("hello");
        const bookingID = appointmentContainer.querySelector(
          ".appointment-detail"
        ).dataset.orderId;
        const service =
          appointmentContainer.querySelector(".service").textContent;
        const dateTime =
          appointmentContainer.querySelector(".date-time").textContent;
        // I need customer Name, his emailaddress, customerID
        console.log(bookingID, dateTime, service);
      }
    });
  }
}
