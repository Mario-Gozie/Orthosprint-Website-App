export default class AppointmentsView {
  constructor(controller) {
    this.controller = controller;
    this._page = 1;
    this.paginationContainer = document.querySelector(".pagination-container");
    this.nextButton = this.paginationContainer.querySelector(".appt-next");
    this.previousButton =
      this.paginationContainer.querySelector(".appt-previous");
    this._pageNoElement =
      this.paginationContainer.querySelector(".page-number");

    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );
    console.log(this.allApointmentsContainer);
    // Event Listeners for Pagination

    this.paginationContainer.addEventListener("click", (e) =>
      this.handlePagination(e)
    );
  }

  getPage() {
    return this._page;
  }

  // Pagination Events functions

  handlePagination(event) {
    event.preventDefault(); // Prevent default action
    if (event.target === this.nextButton) {
      this._page += 1; // Increment the page number
      this.controller.getAppointmentDataOnLoad(this._page);
      this._pageNoElement.textContent = `Page ${this._page}`;
    } else if (event.target === this.previousButton) {
      this._page -= 1; // Decrement the page number
      this.controller.getAppointmentDataOnLoad(this._page);
      this._pageNoElement.textContent = `Page ${this._page}`;
    } else {
      return;
    }
  }

  // RENDERING BUTTON LOGIC

  gettingButtonsToRender(MaxPageNo) {
    this.paginationContainer.style.display = "flex";
    console.log(MaxPageNo, this.getPage());
    console.log(`Current Page: ${this._page}, Max Page: ${MaxPageNo}`);

    // HIDE BOTH BUTTONS IF THERE'S ONE PAGE OR LESS
    if (MaxPageNo <= 1) {
      this.previousButton.style.display = "none";
      this.nextButton.style.display = "none";
    } else {
      // SHOW PREVIOUS BUTTON IF NOT ON FIRST PAGE
      this.previousButton.style.display = this._page > 1 ? "block" : "none";

      // SHOW NEXT BUTTON IF NOT ON LAST PAGE
      this.nextButton.style.display = this._page < MaxPageNo ? "block" : "none";
    }
    // UPDATE PAGE NUMBER DISPLAY
    this._pageNoElement.textContent = `Page ${this._page}`;
  }

  /// WHEN THE BOOKING ARRAY IS NOT EMPTY

  filledAppointmentArray(appointmentArray) {
    this.allApointmentsContainer.innerHTML = ""; // Clear previous appointments

    appointmentArray.forEach((appt) => {
      // Use forEach instead of map
      if (appt.status === "pending") {
        const html = `<div class="appointment-container pending">
                        <div class="appointment-detail" data-order-id= ${appt.bookingID}>
                          <h4>${appt.bookedDate} - ${appt.bookedTime}</h4>
                          <p>${appt.service}</p>
                        </div>
                        <button class="cancel-btn">Cancel</button>
                      </div>`;
        this.allApointmentsContainer.insertAdjacentHTML("beforeend", html); // Append the HTML to the container
      }
    });
  }

  // WHEN THE BOOKING ARRAY IS NOT EMPTY

  emptyAppointmentArray() {
    const html = `<div style= "background: #e0e0e0; border-radius: 15px; height: 100%;  display:flex; flex-direction: column; justify-content: center; align-items: center"><i class="fa-regular fa-clock" style="margin: 1rem 0; font-size: 4rem; color: #0077b5;"></i><strong style="text-align: center; margin: 0.5rem 0 0 0" > All appointment will be here, lets get started </strong></div>`;
    this.allApointmentsContainer.innerHTML = html;
    this.paginationContainer.style.display = "none";
    return;
  }
}
