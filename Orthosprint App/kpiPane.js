export default class KPIpane {
  constructor() {
    this.kpiWrapper = document.querySelector(".kpi-section-wrapper");
  }

  renderKPIs(userBookingArray) {
    if (userBookingArray.length === 0 || !userBookingArray) {
      const html = `<div class="kpi-container honoured-appointments">
        <h3>Honoured Appointments</h3>
        <p>-</p>
      </div>
      <div class="kpi-container cancellled-appointments">
        <h3>Canceled Appointments</h3>
        <p>-</p>
      </div>
      <div class="kpi-container pending-appointments">
        <h3>Pending Appointments</h3>
        <p>-</p>
      </div>
      <div class="kpi-container missed-appointments">
        <h3>Missed Appointments</h3>
        <p>-</p>
      </div>`;
      this.kpiWrapper.innerHTML = html;
    } else {
      const html = `<div class="kpi-container honoured-appointments">
        <h3>Honoured Appointments</h3>
        <p>${this.renderBasedOnStatus(userBookingArray, "honoured")}</p>
      </div>
      <div class="kpi-container cancellled-appointments">
        <h3>Canceled Appointments</h3>
        <p>${this.renderBasedOnStatus(userBookingArray, "cancelled")}</p>
      </div>
      <div class="kpi-container pending-appointments">
        <h3>Pending Appointments</h3>
        <p>${this.renderBasedOnStatus(userBookingArray, "pending")}</p>
      </div>
      <div class="kpi-container missed-appointments">
        <h3>Missed Appointments</h3>
        <p>${this.renderBasedOnStatus(userBookingArray, "missed")}</p>
      </div>`;
      this.kpiWrapper.innerHTML = html;
    }
  }

  renderBasedOnStatus(userBookingArray, type) {
    return userBookingArray.reduce((count, booking) => {
      return booking.status === type ? count + 1 : count;
    }, 0); // So the count is appearing twice because I want to return the same count without adding to it if the condition does not match
  }
}
