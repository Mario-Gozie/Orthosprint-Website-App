class AppointmentView {
  constructor() {}

  renderAppointments(appoinmentArray, Element) {
    if (appoinmentArray.length === 0 || !appoinmentArray) {
      const html = `All appointment will be here, lets get started`;
      Element.innerHTML = html;
    }
  }
}
