import { state, dataModel } from "../Js/model.js";
import login from "./login.js";

const identifyUser = (identifier) => {
  return state.clients.find((client) => {
    return client.username === identifier || client.email === identifier;
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

const init = () => {
  // identifyUser();
  gettingSavedDataController();
  login.OnloginEvent(identifyUser);
};

init();
