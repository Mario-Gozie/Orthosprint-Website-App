import { state, dataModel, getToday } from "../Js/model.js";
import { LoginInstance } from "./login.js";

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

function extractDateParts(date) {
  const optionsDay = { weekday: "long" }; // String part of the day
  const optionsMonth = { month: "long" }; // String part of the month
  const optionsDate = { day: "numeric" }; // Numeric part of the day
  const optionsYear = { year: "numeric" }; // Year

  const dayString = date.toLocaleDateString("en-US", optionsDay);
  const monthString = date.toLocaleDateString("en-US", optionsMonth);
  const dayNumber = date.toLocaleDateString("en-US", optionsDate);
  const yearNumber = date.toLocaleDateString("en-US", optionsYear);

  return {
    dayString,
    monthString,
    dayNumber,
    yearNumber,
  };
}

// Example usage
const today = new Date();
const dateParts = extractDateParts(today);
console.log(dateParts);

const init = () => {
  // identifyUser();
  gettingSavedDataController();
  LoginInstance.OnloginEvent(identifyUser);
  extractDateParts(getToday);
};

init();
