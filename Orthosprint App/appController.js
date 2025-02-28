import {
  state,
  dataModel,
  getUser,
  ActiveUserUsername,
  availableTimeChecker,
  Booking,
  ManageBookingApointments,
  getActiveUserOrderArray,
} from "../Js/model.js";

import MainView from "./mainView.js"; // Adjust the path as necessary
import WelcomeView from "./welcomeView.js";
import DateTimeView from "./dateTimeView.js";
import LoginView from "./loginView.js";
import AppointmentBookingView from "./appointmentBookingView.js";
import AppointmentsView from "./appointmentsView.js";
import KPIpane from "./kpiPane.js";

export default class appController {
  constructor() {
    // this.ActiveUser;

    // Instances

    this.LoginView = new LoginView(this);
    this.mainView = new MainView(); // Instantiate main view
    this.WelcomeView = new WelcomeView();
    this.AppointmentsView = new AppointmentsView();
    this.AppointmentBookingView = new AppointmentBookingView(this);
    this.dateTimeView = new DateTimeView(this);
    this.KPIpane = new KPIpane();

    this.location;

    // Functions
    this.loadSavedData();
    this._getGeoPoints();
  }

  // METHODS
  _getGeoPoints() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this._getLocation(latitude, longitude);
      });
    }
  }

  async _getLocation(lat, long) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`
      );

      if (!response.ok) {
        throw new Error(`http Error! ${locationFetch.status}`);
      }

      const data = await response.json();

      if (data) {
        const city = data.address.city;
        const country = data.address.country;
        this.location = `${city}, ${country}`;
      } else {
        console.log("Location not found.");
      }
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }
  }

  // LOADING THE DATA FROM THE BROWSER DATABASE.

  loadSavedData() {
    const savedData = dataModel.getData("State");

    if (savedData) {
      Object.assign(state, savedData); // Update the state object
      console.log("Loaded saved state:", state);
    } else {
      console.log("No saved state found in localStorage");
    }
  }

  updateUI() {
    this.AppointmentsView.renderAppointments(getActiveUserOrderArray());
    this.KPIpane.renderKPIs(getActiveUserOrderArray());
  }

  loginController(loginDetail) {
    const { identifier, IdentifierPassword } = loginDetail;
    const user = getUser(identifier, IdentifierPassword);

    if (user) {
      // this.ActiveUser = getActiveUser();

      console.log(user);
      setTimeout(() => {
        this.LoginView.hideLoginView(); // Remove from layout
        this.WelcomeView.generateWelcomeMarkup(
          ActiveUserUsername(),
          this.location
        );
        this.updateUI();
        this.mainView.show(); // Use main view to show the main section
      }, 1000);
    } else {
      alert("Invalid login Details");
    }
  }

  getAvailablebookingTimes(date) {
    return availableTimeChecker(date);
  }

  HandlingBookings({ bookingDate, bookedDate, service, bookedTime }) {
    const latestBooking = new Booking(
      bookingDate,
      bookedDate,
      service,
      bookedTime,
      state
    );
    // console.log(latestBooking.bookingDate);
    new ManageBookingApointments(latestBooking);
    this.updateUI();
    // console.log(state.AllBookingDateTime);
    // console.log(this.ActiveUser.bookings);
    // console.log(state.bookingDetail);
  }
}
