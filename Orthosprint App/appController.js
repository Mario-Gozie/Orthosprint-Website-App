import {
  state,
  dataModel,
  getUser,
  ActiveUser,
  availableTimeChecker,
} from "../Js/model.js";

import MainView from "./mainView.js"; // Adjust the path as necessary
import WelcomeView from "./welcomeView.js";
import DateTimeView from "./dateTimeView.js";

import AppointmentBookingView from "./appointmentBookingView.js";

export default class appController {
  constructor() {
    const getAvailablebookingTimes = (date) => availableTimeChecker(date);
    // Instances
    this.AppointmentBookingView = new AppointmentBookingView();
    this.dateTimeView = new DateTimeView();
    this.dateTimeView.controller(getAvailablebookingTimes); // Call the controller method. This is done because there are some event listeners in it.
    this.mainView = new MainView(); // Instantiate main view
    this.WelcomeView = new WelcomeView();

    this.location;

    // Element Variables
    this.usernameEmailContainer = document.querySelector(".username");
    this.loginSection = document.querySelector(".login-section");
    this.password = document.querySelector(".password");
    this.togglePasswordIcon = document.querySelector(".toggle-password");
    this.loginForm = document.querySelector(".login-form");

    // Event Listerners
    this.loginForm.addEventListener("submit", (e) => this._loginEvent(e));

    // Functions

    this.loadSavedData();
    this._showPassword();
    this._getGeoPoints();
    // this.BookingTimeSelection();
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

  // LOGIN ACTIONS

  _loginEvent(event) {
    event.preventDefault();

    const formData = new FormData(this.loginForm);

    const identifier = formData.get("usernameEmail");
    const IdentifierPassword = formData.get("password");
    console.log(state.clients);
    console.log(identifier, IdentifierPassword);

    // GET USER IS A MODEL FUNCTION.
    console.log(identifier, identifier);
    getUser(identifier, IdentifierPassword);

    // REMEMBER THAT THE ACTIVE USER IS COMING FROM THE MODEL.
    // The active user is set by the get User function.
    console.log(`user`, ActiveUser);

    // Fully Implementing login process.
    if (ActiveUser) {
      console.log(ActiveUser.firstName);

      // RENDERING WELCOME PANE VIEW
      this.WelcomeView.generateWelcomeMarkup(ActiveUser, this.location);
      this.loginForm.reset();

      // Fade out the login section
      this.loginSection.style.opacity = "0";

      // After the fade-out, hide the login section and show the main section
      setTimeout(() => {
        this.loginSection.style.display = "none"; // Remove from layout
        this.mainView.show(); // Use main view to show the main section
        // DatePicker.settingMinimumDate();
      }, 1000); // Match this timeout with the transition duration
      // this.WelcomeView.renderWelcomeView();
    } else {
      alert("User not found");
      return;
    }
  }

  // SHOW PASSWORD

  _showPassword() {
    this.togglePasswordIcon.addEventListener("click", () => {
      // Toggle the input type
      const type =
        this.password.getAttribute("type") === "password" ? "text" : "password";
      this.password.setAttribute("type", type);

      // Toggle the icon classes
      this.togglePasswordIcon.classList.toggle("fa-eye"); // Show open eye
      this.togglePasswordIcon.classList.toggle("fa-eye-slash"); // Show closed eye
    });
  }
}

console.log(state);
