export default class ManageAppointmentView {
  constructor(controller) {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
    this.controller = controller;
    this.appointmentViewEvent();
  }

  appointmentViewEvent() {
    this.allApointmentsContainer.addEventListener("click", (e) => {
      if (e.target.matches(".cancel-btn")) {
        // cancelation Actions
        this.cancelAppointment(this.controller.cancellationController);
        this.controller.ModalWindow.openModalWindow(this.cancelHTML());
      } else if (
        !e.target.matches(".cancel-btn") &&
        e.target.closest(".Qr-code")
      ) {
        //barcode actions
        this.useQRcodeAPI(e);
      } else {
        return;
      }
    });
  }

  //////////////////////////////////////////////////// APPOINTMENT CANCELLATION PROCESS ///////////////////////////////////////////////////////////////////

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
        this.controller.updateUI();
        // this.controller.ModalWindow.openModalWindow(this.cancelHTML());
        e.stopPropagation(); //this will make event not to bubble
      }
    });
  }

  //////////////////////////////////////////////// GENERATING BARCODE FUNCTIONS ////////////////////////////////////////////////////////////////////////////

  generateData(e) {
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

      const [bookedDate, bookedTime] = dateTime.split(" - ");
      // I need customer Name, his emailaddress, customerID
      const { fullName, clientId, email } =
        this.controller.controllerGetUserbarCodeData();

      return {
        fullName,
        clientId,
        email,
        bookingID,
        bookedDate,
        bookedTime,
        service,
      };
    }
  }

  useQRcodeAPI(e) {
    const dataObject = this.generateData(e);
    const Qrcode_AppIDcontainer = document.querySelector(
      ".QRcode-Booking-container"
    );

    // Displaying the Qcode_Appointment container
    Qrcode_AppIDcontainer.style.display = "flex";

    // Displaying AppointmentID
    const ApptIdElement = Qrcode_AppIDcontainer.querySelector(
      ".appointment-id-container"
    );
    ApptIdElement.textContent = dataObject.bookingID;

    // Displaying barcode
    const qrCodeContainer =
      Qrcode_AppIDcontainer.querySelector(".qrcode-container");

    qrCodeContainer.innerHTML = "";

    // STRINGIFYING (JASON)

    const qrCodeJsonString = JSON.stringify(dataObject);

    // Adding Small animation to the wrapper

    if (typeof QRCode === "undefined") {
      console.error(
        "QRCode library is not loaded. Please check the import statement."
      ); // ERR LOGGING
      return; // Stop execution here if QR code library is not available
    }

    // BarQRGerneration
    new QRCode(qrCodeContainer, {
      text: qrCodeJsonString,
      width: 150,
      height: 150,
      correctLevel: QRCode.CorrectLevel.L, // Lowest error correction to fit more data
      version: 10, // Increase the version (range: 1-40)
    });

    setTimeout(() => {
      Qrcode_AppIDcontainer.querySelector(".QRcode-wrapper").classList.add(
        "QRcode-wrapperBigger"
      );
    }, 1000);

    console.log(qrCodeJsonString);
  }
}
