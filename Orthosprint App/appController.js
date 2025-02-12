import {
  state,
  dataModel,
  getUser,
  // getLocation,
  // currentUser,
} from "../Js/model.js";

import MainView from "./mainView.js"; // Adjust the path as necessary
import WelcomeView from "./welcomeView.js";
// import DatePicker from "./datePickerView.js";
// import datePickerView from "./datePickerView.js";

export default class appController {
  constructor() {
    // Instances

    this.mainView = new MainView(); // Instantiate main view
    this.WelcomeView = new WelcomeView();
    // this.datePicker = new DatePicker(); // Initialize here

    /// Variables
    this.dateInput = document.getElementById("dateInput");
    console.log(this.dateInput);
    this.location;

    // Element Variables
    this.usernameEmailContainer = document.querySelector(".username");
    this.loginSection = document.querySelector(".login-section");
    this.password = document.querySelector(".password");
    this.togglePasswordIcon = document.querySelector(".toggle-password");
    this.loginForm = document.querySelector(".login-form");

    // Event Listerners
    this.loginForm.addEventListener("submit", (e) => this.loginEvent(e));
    this.dateInput.addEventListener("click", () => {
      const today = new Date();

      const tomorrow = new Date(today);

      tomorrow.setDate(today.getDate() + 1); // setting tommorrow

      const minDate = tomorrow.toISOString().split("T")[0];
      this.dateInput.setAttribute("min", minDate);
    });

    // Functions

    this.loadSavedData();
    this.showPassword();
    this._getGeoPoints();
  }

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

  loginEvent(event) {
    event.preventDefault();

    const formData = new FormData(this.loginForm);

    const identifier = formData.get("usernameEmail");
    const IdentifierPassword = formData.get("password");
    console.log(state.clients);
    console.log(identifier, IdentifierPassword);

    // GET USER IS A MODEL FUNCTION.
    console.log(identifier, identifier);
    const user = getUser(identifier, IdentifierPassword);
    console.log(`user`, user);

    // Fully Implementing login process.
    if (user) {
      console.log(user.firstName);

      // RENDERING WELCOME PANE VIEW
      this.WelcomeView.generateWelcomeMarkup(user, this.location);
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

  showPassword() {
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

// import AppViewWelcome from "./appViewWelcome.js";

console.log(state);

// const gettingSavedDataController = () => {
//   const savedData = dataModel.getData("State");

//   if (savedData) {
//     Object.assign(state, savedData); //updating the state object with the savedData property. all the properties of savedData will be giving to state.
//     console.log(state);
//     // state = { ...savedData };
//   } else {
//     console.log("No saved state found in localStorage");
//   }
// };

// gettingSavedDataController();

// // import Login from "./login.js";

// // import AppViewWelcome from "./appViewWelcome.js";

// class Controller {
//   //I exported this class because I want another function to inherit the data in it.
//   usernameEmailContainer = document.querySelector(".username");
//   loginSection = document.querySelector(".login-section");
//   password = document.querySelector(".password");
//   togglePasswordIcon = document.querySelector(".toggle-password");
//   loginForm = document.querySelector(".login-form");
//   // currentUser;

//   constructor() {
//     // super();

//     this.loginForm.addEventListener("submit", (e) => loginEvent(e));
//     this.showPassword();
//   }

//   loginEvent(event) {
//     e.preventDefault();

//     const formData = new FormData(this.loginForm);

//     const identifier = formData.get("usernameEmail");
//     const IdentifierPassword = formData.get("password");

//     // GET USER IS A MODEL FUNCTION.
//     console.log(identifier, identifier);
//     const user = this.getUser(identifier, IdentifierPassword);
//     console.log(`user`, user);

//     // Fully Implementing login process.
//     if (user) {
//       this.loginForm.reset();

//       // Fade out the login section
//       this.loginSection.style.opacity = "0";

//       // After the fade-out, hide the login section and show the main section
//       setTimeout(() => {
//         this.loginSection.style.display = "none"; // Remove from layout
//         this.mainSection.style.opacity = "1"; // Fade in main section
//         this.mainSection.style.display = "block";
//       }, 1000); // Match this timeout with the transition duration
//     } else {
//       alert("User not found");
//       return;
//     }
//   }

//   showPassword() {
//     document.addEventListener("DOMContentLoaded", () => {
//       this.togglePasswordIcon.addEventListener("click", () => {
//         // Toggle the input type
//         const type =
//           this.password.getAttribute("type") === "password"
//             ? "text"
//             : "password";
//         this.password.setAttribute("type", type);

//         // Toggle the icon classes
//         this.togglePasswordIcon.classList.toggle("fa-eye"); // Show open eye
//         this.togglePasswordIcon.classList.toggle("fa-eye-slash"); // Show closed eye
//       });
//     });
//   }
// }

// const gettingSavedDataController = () => {
//   const savedData = dataModel.getData("State");

//   if (savedData) {
//     Object.assign(state, savedData); //updating the state object with the savedData property. all the properties of savedData will be giving to state.

//     // state = { ...savedData };
//   } else {
//     console.log("No saved state found in localStorage");
//   }
// };

// // Call the function to initialize the WelcomePane

// const init = () => {
//   gettingSavedDataController();
//   // Login.OnloginEvent(identifyUser);
//   // document.addEventListener("DOMContentLoaded", () => {
//   //   new Controller();
//   // });
//   // console.log(`${identifyUser.firstName} hello`);
// };

// init();
