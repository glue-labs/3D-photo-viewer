import { pathOr } from "ramda";
import actionsTypes from "../../actionTypes";
import { Actions, CarDamageDetectorState } from "./type";

const initialState: CarDamageDetectorState = {
  imageUrl: "",
  outputUrl: "",
  resultSpinner: false,
};

function carDamageDetection(state = initialState, action: Actions) {
  switch (action.type) {
    case actionsTypes.CHECK_CAR_DAMEGE_AREAS_REQUEST: {
      return { ...state, resultSpinner: true };
    }

    case actionsTypes.CHECK_CAR_DAMEGE_AREAS_SUCCESS: {
        console.log(pathOr("", ["payload", "output_url"], action), action);
      return {
        ...state,
        outputUrl: pathOr("", ["payload", "output_url"], action),
        resultSpinner: false,
      };
    }

    case actionsTypes.CHECK_CAR_DAMEGE_AREAS_FAILURE: {
      return { ...state, resultSpinner: false };
    }

    default: {
      return { ...state };
    }
  }
}
export default carDamageDetection;
