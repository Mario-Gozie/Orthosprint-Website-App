export default class AppointmentsView {
  constructor() {
    this.data;
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

    this.previousButton.addEventListener("click", (e) => this.decreasePageNo());
    this.nextButton.addEventListener("click", (e) => this.increasePageNo());
  }

  getPage() {
    return this._page;
  }

  gettingButtonsToRender(MaxPageNo) {
    this.paginationContainer.style.display = "flex";
    console.log(MaxPageNo, this.getPage());
    // if (this._page === MaxPageNo && MaxPageNo > 1) {
    //   this.previousButton.style.display = "flex";
    //   this.nextButton.style.display = "none";
    // }
    if (this._page === 1 && MaxPageNo === 1) {
      this.previousButton.style.display = "none";
      this.nextButton.style.display = "none";
    }

    // if (this._page < MaxPageNo && this._page !== 1) {
    //   this.previousButton.style.display = "flex";
    //   this.nextButtonButton.style.display = "flex";
    // }

    this._pageNoElement.textContent = `Page ${this._page}`;
  }

  /* LOGIC I AM STILL WORKING ON */

  filledAppointmentArray(appointmentArray) {
    this.allApointmentsContainer.innerHTML = ""; // Clear previous appointments

    appointmentArray.forEach((appt) => {
      // Use forEach instead of map
      if (appt.status === "pending") {
        const html = `<div class="appointment-container">
                        <div class="appointment-detail">
                          <h4>${appt.bookedDate} - ${appt.bookedTime}</h4>
                          <p>${appt.service}</p>
                        </div>
                        <button class="cancel-btn">Cancel</button>
                      </div>`;
        this.allApointmentsContainer.insertAdjacentHTML("beforeend", html); // Append the HTML to the container
      }
    });
  }

  /* LOGIC I AM STILL WORKING ON ENDS HERE */

  // renderAppointments(appoinmentArray) {
  //   if (appoinmentArray.length === 0 || !appoinmentArray) {
  //     this._emptyAppointmentArray();
  //   }

  //   if (appoinmentArray.length > 0) {
  //     // SETTING PAGE NO

  //     this.allApointmentsContainer.innerHTML = ""; // Clear previous appointments
  //     appoinmentArray.forEach((appt) => {
  //       // Use forEach instead of map
  //       if (appt.status === "pending") {
  //         const html = `<div class="appointment-container">
  //                         <div class="appointment-detail">
  //                           <h4>${appt.bookedDate} - ${appt.bookedTime}</h4>
  //                           <p>${appt.service}</p>
  //                         </div>
  //                         <button class="cancel-btn">Cancel</button>
  //                       </div>`;
  //         this.allApointmentsContainer.insertAdjacentHTML("beforeend", html); // Append the HTML to the container
  //       }
  //     });
  //     this.paginationContainer.style.display = "flex"; // Show pagination if there are appointments
  //   }
  // }

  emptyAppointmentArray() {
    const html = `<div style= "background: #e0e0e0; border-radius: 15px; height: 100%;  display:flex; flex-direction: column; justify-content: center; align-items: center"><i class="fa-regular fa-clock" style="margin: 1rem 0; font-size: 4rem; color: #0077b5;"></i><strong style="text-align: center; margin: 0.5rem 0 0 0" > All appointment will be here, lets get started </strong></div>`;
    this.allApointmentsContainer.innerHTML = html;
    this.paginationContainer.style.display = "none";
    return;
  }
}
