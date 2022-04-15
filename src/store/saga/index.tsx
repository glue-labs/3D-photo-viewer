import { all } from "redux-saga/effects";
import userAuth from "../saga/userAuthSaga";
import carDamageDetection from "../saga/carDamageDetection";

export const tasks = [...userAuth, ...carDamageDetection];
function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
