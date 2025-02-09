import {
  state,
  dataModel,
  today,
  getLocation,
  currentUser,
} from "../Js/model.js";

import AppViewParent from "./appViewParent.js";
import Login from "./login.js";

// import WelcomePane from "./welcomePane.js";
// import AppBooking from "./AppBooking.js";

let AppViewParentInstance;

const identifyUser = (identifier, password) => {
  const currentRetrievedData = state.clients.find((client) => {
    return (
      client.username === identifier ||
      (client.email === identifier && password === client.password)
    );
  });

  // YOU CAN SORT BY KEY IN ALPHABETICAL ORDER FIRST.
  // with this, I am making sure right values are passed in. I can also make it an array

  const currentUserInstance = new currentUser(
    currentRetrievedData.address,
    currentRetrievedData.clientId,
    currentRetrievedData.email,
    currentRetrievedData.firstName,
    currentRetrievedData.gender,
    currentRetrievedData.lastName,
    currentRetrievedData.password,
    currentRetrievedData.phoneNumber,
    currentRetrievedData.username
  );

  // passing on the daata to the AppView Parent.
  return new AppViewParent(currentUserInstance, today);
};

// const identifyUser = (identifier, password) => {
//   return state.clients.find((client) => {
//     return (
//       client.username === identifier ||
//       (client.email === identifier && password === client.password)
//     );
//   });
// };

const gettingSavedDataController = () => {
  const savedData = dataModel.getData("State");

  if (savedData) {
    Object.assign(state, savedData); //updating the state object with the savedData property. all the properties of savedData will be giving to state.

    // state = { ...savedData };
  } else {
    console.log("No saved state found in localStorage");
  }
};

// new AppBooking();

// let welcomePaneInstance; // Declaring an empty instance

// const initializeWelcomePane = async () => {
//   try {
//     const location = await getLocation(); // Wait for the location to be fetched
//     welcomePaneInstance = new WelcomePane(today, location);
//     welcomePaneInstance.updateHour();
//     welcomePaneInstance.renderWelcomeGreeting();
//     console.log(welcomePaneInstance.location);
//   } catch (error) {
//     console.error(`Error getting location: ${error.message}`);
//   }
// };

// Call the function to initialize the WelcomePane

const init = async () => {
  gettingSavedDataController();
  Login.OnloginEvent(identifyUser);
  // The await function below is will retrun a promise. and I want the init function to be called only when the result is out.
  // await initializeWelcomePane();
};

init();
