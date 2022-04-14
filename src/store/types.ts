import { CarDamageDetectorState } from "./reducer/carDamageDetection/type";
import { UserAuthState } from "./reducer/userAuth/type";

export interface StoreState {
  userAuth: UserAuthState;
  carDamageDetection: CarDamageDetectorState
}
