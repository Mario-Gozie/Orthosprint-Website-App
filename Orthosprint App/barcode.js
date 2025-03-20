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
        const bookingID = e.target
          .closest(".appointment-detail")
          .getAttribute("data-order-id");
        // this.allApointmentsContainer.querySelector(".barcode-info-wrapper");
        console.log(bookingID);
      } else {
        console.log("Hello");
      }
    });
  }
}
