import {
    checkCarDamageAreasFailure,
    checkCarDamageAreasSuccess,
    checkCarDamageAreasRequest,
  } from "../../actions/carDamangeDetection";
  
  export interface CarDamageDetectorState {
    imageUrl: string;
    outputUrl: string;
    resultSpinner: boolean;
  }
  
  export type Actions = ReturnType<
    typeof checkCarDamageAreasRequest | typeof checkCarDamageAreasSuccess | typeof checkCarDamageAreasFailure
  >;
  