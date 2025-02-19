import {
  state,
  dataModel,
  getUser,
  ActiveUser,
  // getLocation,
  // currentUser,
} from "../Js/model.js";

import MainView from "./mainView.js"; // Adjust the path as necessary
import WelcomeView from "./welcomeView.js";
import dateTimeView from "./dateTimeView.js";
import appointmentBookingView from "./appointmentBookingView.js";

export default class appController {
  constructor() {
    // Instances

    this.mainView = new MainView(); // Instantiate main view
    this.WelcomeView = new WelcomeView();

    /// Variables
    this.dateInput = document.getElementById("dateInput");
    this.timeContainer = document.querySelector(".times-container");
    this.appointmentForm = document.querySelector(".appointment-booking-form");
    this.DateErrorContainer = document.querySelector(".dateErrMsg");
    console.log(this.appointmentForm);
    this.location;

    // Element Variables
    this.usernameEmailContainer = document.querySelector(".username");
    this.loginSection = document.querySelector(".login-section");
    this.password = document.querySelector(".password");
    this.togglePasswordIcon = document.querySelector(".toggle-password");
    this.loginForm = document.querySelector(".login-form");

    // Event Listerners
    this.loginForm.addEventListener("submit", (e) => this._loginEvent(e));
    this.dateInput.addEventListener("click", this._revealDateInput());

    // Event listerner for times. to be improved.
    this.dateInput.addEventListener("change", () => this._displayTimes());
    this.appointmentForm.addEventListener("submit", (e) => {
      this._bookingAppointments(e);
    });

    // Functions

    this.loadSavedData();
    this._showPassword();
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
        throw new Error(`http Erro! ${locationFetch.status}`);
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

  _revealDateInput() {
    const today = new Date();

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1); // setting tommorrow

    const minDate = tomorrow.toISOString().split("T")[0];
    this.dateInput.setAttribute("min", minDate);
  }

  // THIS CODE DISPLAYS APPOINTMENT TIMES.

  _displayTimes() {
    if (this.dateInput.value === "") {
      this.timeContainer.innerHTML = "";
      this.timeContainer.hidden = true;
      console.log("money");
    } else {
      const selectedDate = new Date(this.dateInput.value);
      const dateToCheck = selectedDate.getUTCDay(); // 0 = sunday, 6 = saturday
      if (dateToCheck === 0 || dateToCheck === 6) {
        this.DateErrorContainer.textContent =
          "Please we dont work on weekends, Choose a weekday*";
        this.dateInput.value = "";
        this.timeContainer.innerHTML = ""; // Clear time container
        this.timeContainer.hidden = true; // Hide time container
      } // Clear Input
      else {
        this.DateErrorContainer.textContent = ""; //Clearing the error Message container
        this.timeContainer.innerHTML = dateTimeView.rendertimes(
          state,
          this.dateInput
        );
        this.timeContainer.hidden = false;
        console.log("Hello");
      }
    }
  }

  // HAMDLING APPOINTMENTS

  _bookingAppointments(Event) {
    Event.preventDefault();
    appointmentBookingView.checkAppointmentDetail(this.appointmentForm);
  }
}

// import AppViewWelcome from "./appViewWelcome.js";

console.log(state);
