import { state, dataModel, today } from "../Js/model.js";
import Login from "./login.js";
// import welcomePane from "./welcomePane.js";
import WelcomePane from "./welcomePane.js";

// import WelcomePane from "./welcomePane.js";

const identifyUser = (identifier, password) => {
  return state.clients.find((client) => {
    return (
      client.username === identifier ||
      (client.email === identifier && password === client.password)
    );
  });
};

const gettingSavedDataController = () => {
  const savedData = dataModel.getData("State");

  if (savedData) {
    Object.assign(state, savedData); //updating the state object with the savedData property. all the properties of savedData will be giving to state.

    // state = { ...savedData };
  } else {
    console.log("No saved state found in localStorage");
  }
};

const dateControl = (today) => {
  const WelcomeDate = new WelcomePane(today);
};

const init = () => {
  // identifyUser();
  gettingSavedDataController();
  Login.OnloginEvent(identifyUser);
  dateControl(today);
};

init();
