import { useSelector } from "react-redux";
import { StoreState } from "../types";

export const useCarDamageDetectionSelector = () => {
  const { outputUrl, resultSpinner } = useSelector(
    (state: StoreState) => ({
      outputUrl: state.carDamageDetection.outputUrl,
      resultSpinner: state.carDamageDetection.resultSpinner
    })
  );

  return { outputUrl, resultSpinner };
};
