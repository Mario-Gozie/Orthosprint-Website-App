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
    }
  }
}
