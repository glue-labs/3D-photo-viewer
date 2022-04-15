import actionsTypes from "../actionTypes";

export const checkCarDamageAreasRequest = (payload: {
  image: string;
  draw_result: boolean;
  history: any;
}) => {
  return {
    type: actionsTypes.CHECK_CAR_DAMEGE_AREAS_REQUEST,
    payload,
  };
};

export const checkCarDamageAreasSuccess = (payload: {
 job_id: string,
 draw_result: boolean,
 output: object,
 output_url: string,
 url_expiry: string,
}) => {
  return {
    type: actionsTypes.CHECK_CAR_DAMEGE_AREAS_SUCCESS,
    payload,
  };
};

export const checkCarDamageAreasFailure = () => {
  return {
    type: actionsTypes.CHECK_CAR_DAMEGE_AREAS_FAILURE,
  };
};