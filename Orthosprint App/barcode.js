export default class BarCodeCreator {
  constructor() {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
    this.generateBarcode();
  }

  generateBarcode() {
    this.allApointmentsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("appointment-container")) {
        console.log("hello");
        const bookingID = e.target.querySelector(".appointment-detail").dataset
          .orderId;
        console.log(bookingID);

        // this.allApointmentsContainer.querySelector(".barcode-info-wrapper");
        console.log(bookingID);
      } else {
        console.log("Hello");
      }
    });
  }
}
