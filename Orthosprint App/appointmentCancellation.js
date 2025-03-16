export default class AppointmentCancellation {
  constructor(controller) {
    this.controller = controller;
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );

    this.cancelAppointment();
  }

  cancelAppointment() {
    this.allApointmentsContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("cancel-btn")) {
        const appointmentContainer = e.target.closest(".appointment-container");
        const appointmentDetail = appointmentContainer.querySelector(
          ".appointment-detail"
        );

        const orderId = appointmentDetail.getAttribute("data-order-id"); // Get data attribute
        const dateTimeText = appointmentDetail.querySelector("h4").textContent; // Get date and time text

        // Split date and time
        const [date, time] = dateTimeText.split(" - ");

        console.log("Cancel button clicked:", e.target.textContent);
        console.log("Order ID:", orderId);
        console.log("Date:", date);
        console.log("Time:", time);

        // handler();
      }
    });
  }
}
