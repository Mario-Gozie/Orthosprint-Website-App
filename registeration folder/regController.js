import regView from "./regView.js";

import { NewClient, state, dataModel } from "../Js/model.js";

// console.log("money");
// console.log(state.clients);

const SaveDataController = () => {
  dataModel.saveData("State", state);
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

const saveCustomerRegInfo = (
  firstName,
  lastName,
  address,
  phoneNumber,
  username,
  email,
  password,
  gender
) => {
  state.clients.push(
    new NewClient(
      state.clients,
      firstName,
      lastName,
      address,
      phoneNumber,
      username,
      email,
      password,
      gender
    )
  );
  console.log(state.clients);
  SaveDataController(); // Saving Data
};

const init = () => {
  regView.submitReg(saveCustomerRegInfo);
  regView.closePopup();
  gettingSavedDataController();
  // dataModel.removeData("State");
};
init();
