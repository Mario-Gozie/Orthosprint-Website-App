class AppointmentView {
  constructor() {}

  renderAppointments(appoinmentArray, Element) {
    if (appoinmentArray.length === 0 || !appoinmentArray) {
      const html = `<strong> All appointment will be here, lets get started </strong>`;
      Element.innerHTML = html;
      return;
    }

    if (appoinmentArray.length > 0) {
      appoinmentArray.map((appt) => {});
    }
  }
}
