import regView from "./regView.js";

import { NewClient, state } from "../Js/model.js";

console.log("money");
console.log(state.clients);

const saveCustomerRegInfo = (data) => {
  state.clients.push(data);
  console.log(state.clients);
};

const init = () => {
  regView.submitReg(saveCustomerRegInfo);
  regView.closePopup();
};
init();
