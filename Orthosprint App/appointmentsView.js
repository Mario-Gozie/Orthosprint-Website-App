class AppointmentsView {
  constructor() {}

  renderAppointments(appoinmentArray, Element) {
    if (appoinmentArray.length === 0 || !appoinmentArray) {
      const html = `<strong> All appointment will be here, lets get started </strong>`;
      Element.innerHTML = html;
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
