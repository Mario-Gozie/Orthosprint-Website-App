import {
  state,
  dataModel,
  today,
  // getLocation,
  currentUser,
} from "../Js/model.js";
import AppViewWelcome from "./appViewWelcome.js";

import Login from "./login.js";

// import WelcomePane from "./welcomePane.js";

// import AppBooking from "./AppBooking.js";

const AppViewWelcomeInstance = new AppViewWelcome();

const identifyUser = (identifier, password) => {
  // GETTING THE DATA.

  const currentRetrievedData = state.clients.find((client) => {
    return (
      client.username === identifier ||
      (client.email === identifier && password === client.password)
    );
  });

  // YOU CAN SORT BY KEY IN ALPHABETICAL ORDER FIRST.
  // with this, I am making sure right values are passed in. I can also make it an array

  console.log(currentRetrievedData.firstName);
  AppViewWelcomeInstance.welcomeMessage(currentRetrievedData);

  return new currentUser(currentRetrievedData.firstName);

  // passing on the daata to the AppView Parent.
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

// Call the function to initialize the WelcomePane

const init = () => {
  gettingSavedDataController();
  Login.OnloginEvent(identifyUser);
  // console.log(`${identifyUser.firstName} hello`);
};

init();
