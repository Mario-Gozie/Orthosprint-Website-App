export default class AppointmentsView {
  constructor() {
    this.allApointmentsContainer = document.querySelector(
      ".all-appointment-container"
    );

    this.paginationContainer = document.querySelector(".pagination-container");
    console.log(this.allApointmentsContainer);
  }

  renderAppointments(appoinmentArray) {
    if (appoinmentArray.length === 0 || !appoinmentArray) {
      this.a;
      const html = `<div style= "background: #e0e0e0; border-radius: 15px; height: 100%;  display:flex; justify-content: center; align-items: center"><strong style="text-align: center;" > All appointment will be here, lets get started </strong></div>`;
      this.allApointmentsContainer.innerHTML = html;
      this.paginationContainer.style.display = "none";
      return;
    }

    if (appoinmentArray.length > 0) {
      appoinmentArray.map((appt) => {
        if (appt.status === "pending") {
          `<div class="appointment-container">
              <div class="appointment-detail">
                <h4>${appt.bookedDate} - ${appt.bookedTime}</h4>
                <p>prosthetic</p>
              </div>
              <button class="cancel-btn">Cancel</button>
            </div>`;
        }
      });
    }
  }
}
