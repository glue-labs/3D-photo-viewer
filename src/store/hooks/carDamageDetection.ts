import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useCarDamageDetectionSelector,  } from "../selectors/carDamageDetection";
import { checkCarDamageAreasRequest } from "../actions/carDamangeDetection";

export const useCarDamageDetectionHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { outputUrl, resultSpinner } = useCarDamageDetectionSelector();

  const checkingCarDamagedAreasHandler = useCallback(
      (payload: { draw_result: boolean, image: string }) => {
        dispatch(checkCarDamageAreasRequest({ ...payload, history }))
      },
      [dispatch, history]
  )

  return { checkingCarDamagedAreasHandler, outputUrl, resultSpinner };
};
