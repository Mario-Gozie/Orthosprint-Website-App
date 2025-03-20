import ModalWindow from "./modalWindow.js";

export default class AppointmentCancellation extends ModalWindow {
  constructor(controller) {
    super();
    this.controller = controller;
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );

    this.cancelAppointment(this.controller.cancellationController);
  }

  cancelHTML() {
    return `<i class="fa-solid fa-ban"></i>
    <div class="message">
      <h3>Uh-oh!</h3>
      <p>Appointment Canceled</p>
    </div>`;
  }

  cancelAppointment(handler) {
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

        handler(orderId, date, time);

        this.openModalWindow(this.cancelHTML());
        e.stopPropagation(); //this will make event not to bubble
      }
    });
  }
}
