export default class KPIpane {
  constructor() {}

  renderKPIs(userBookingArray) {
    if (userBookingArray.length === 0 || !userBookingArray) {
      const html = `<div class="kpi-container honoured-appointments">
        <h3>Honoured Appointments</h3>
        <p>45</p>
      </div>
      <div class="kpi-container cancellled-appointments">
        <h3>Canceled Appointments</h3>
        <p>12</p>
      </div>
      <div class="kpi-container pending-appointments">
        <h3>Pending Appointments</h3>
        <p>8</p>
      </div>
      <div class="kpi-container missed-appointments">
        <h3>Missed Appointments</h3>
        <p>5</p>
      </div>`;
    }
  }
}
