import regView from "./regView.js";

import { NewClient, state } from "../Js/model.js";

// console.log("money");
// console.log(state.clients);

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
};

const init = () => {
  regView.submitReg(saveCustomerRegInfo);
  regView.closePopup();
};
init();
