export default class AppointmentsView {
  constructor() {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );

    this.paginationContainer = document.querySelector(".pagination-container");
    this.nextButton = this.paginationContainer.querySelector(".appt-next");
    this.previousButton =
      this.paginationContainer.querySelector(".appt-previous");
    this.pageNo = this.paginationContainer.querySelector(".page-number");
    console.log(this.allApointmentsContainer);
  }

  renderAppointments(appoinmentArray) {
    if (appoinmentArray.length === 0 || !appoinmentArray) {
      this._emptyAppointmentArray();
    }

    if (appoinmentArray.length > 0) {
      this.allApointmentsContainer.innerHTML = ""; // Clear previous appointments
      appoinmentArray.forEach((appt) => {
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
      this.paginationContainer.style.display = "flex"; // Show pagination if there are appointments
    }
  }

  _emptyAppointmentArray() {
    const html = `<div style= "background: #e0e0e0; border-radius: 15px; height: 100%;  display:flex; flex-direction: column; justify-content: center; align-items: center"><i class="fa-regular fa-clock" style="margin: 1rem 0; font-size: 4rem; color: #0077b5;"></i><strong style="text-align: center; margin: 0.5rem 0 0 0" > All appointment will be here, lets get started </strong></div>`;
    this.allApointmentsContainer.innerHTML = html;
    this.paginationContainer.style.display = "none";
    return;
  }
}
