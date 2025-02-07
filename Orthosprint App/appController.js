import { state, currentUserDetail } from "../Js/model.js";
import login from "./login.js";

login.OnloginEvent();

const identifyUser = (custommerArray = state.clients, username) => {
  // currentUserDetail();
};

const init = () => {
  identifyUser();
};

init();
