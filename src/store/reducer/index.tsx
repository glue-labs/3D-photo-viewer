import { combineReducers } from "redux";

import userAuth from "../reducer/userAuth";

import carDamageDetection from "../reducer/carDamageDetection";

export default combineReducers({
  userAuth,
  carDamageDetection
});
