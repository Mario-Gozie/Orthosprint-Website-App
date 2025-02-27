import {
  state,
  dataModel,
  getUser,
  getActiveUser,
  availableTimeChecker,
} from "../Js/model.js";

import MainView from "./mainView.js"; // Adjust the path as necessary
import WelcomeView from "./welcomeView.js";
import DateTimeView from "./dateTimeView.js";
import LoginView from "./loginView.js";
import AppointmentBookingView from "./appointmentBookingView.js";

export default class appController {
  constructor() {
    this.ActiveUser;
    this.LoginView = new LoginView(this);

    // Instances
    this.AppointmentBookingView = new AppointmentBookingView();
    this.dateTimeView = new DateTimeView(this);

    this.mainView = new MainView(); // Instantiate main view
    this.WelcomeView = new WelcomeView();

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

  loginController(loginDetail) {
    const { identifier, IdentifierPassword } = loginDetail;
    const user = getUser(identifier, IdentifierPassword);

    if (user) {
      this.ActiveUser = getActiveUser();

      console.log(user);
      setTimeout(() => {
        this.WelcomeView.generateWelcomeMarkup(this.ActiveUser, this.location);
        this.LoginView.hideLoginView(); // Remove from layout
        this.mainView.show(); // Use main view to show the main section
        // DatePicker.settingMinimumDate();
      }, 1000);
    } else {
      alert("Invalid login Details");
    }
  }

  getAvailablebookingTimes(date) {
    return availableTimeChecker(date);
  }
}

console.log(state);
