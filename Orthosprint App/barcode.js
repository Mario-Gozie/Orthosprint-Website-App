class BarCodeCreator {
  constructor() {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
  }

  generateBarcode() {
    this.allApointmentsContainer("click", (e) => {
      if (e.target.classList.contains("barcode-info-container")) {
        const bookingID = e.target
          .closest(".appointment-detail")
          .getAttribute("data-order-id");
        this.allApointmentsContainer.querySelector(".barcode-info-wrapper");
        console.log(e.target);
      } else {
        console.log("Hello");
      }
    });
  }
}
