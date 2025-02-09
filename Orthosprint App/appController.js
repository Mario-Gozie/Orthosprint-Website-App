import { state, dataModel, today, getLocation } from "../Js/model.js";
import Login from "./login.js";
import WelcomePane from "./welcomePane.js";

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

let welcomePaneInstance; // Declaring an empty instance

const initializeWelcomePane = async () => {
  try {
    const location = await getLocation(); // Wait for the location to be fetched
    welcomePaneInstance = new WelcomePane(today, location);

    console.log(welcomePaneInstance.location);
  } catch (error) {
    console.error(`Error getting location: ${error.message}`);
  }
};

// Call the function to initialize the WelcomePane

const init = async () => {
  gettingSavedDataController();
  Login.OnloginEvent(identifyUser);
  // The await function below is will retrun a promise. and I want the init function to be called only when the result is out.
  await initializeWelcomePane();
  console.log(welcomePaneInstance.renderWelcomeDate());
  console.log(welcomePaneInstance.generateGreetingMarkup());
  console.log(welcomePaneInstance.location);
};

init();
