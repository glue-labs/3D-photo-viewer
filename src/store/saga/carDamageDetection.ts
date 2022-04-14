import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios'

import {
    checkCarDamageAreasFailure,
  checkCarDamageAreasRequest, checkCarDamageAreasSuccess,
} from "../actions/carDamangeDetection";
import actionsTypes from "../actionTypes";

const callAPI = async (url: string, payload: object): Promise<ReturnType<typeof checkCarDamageAreasRequest>> => {  
    try {
        const response = await axios.post(url, payload, {
            headers: {
                'X-RapidAPI-Host': 'vehicle-damage-assessment.p.rapidapi.com',
                'X-RapidAPI-Key': 'd976b8bf97msh7dfccf54e5398b5p18fff4jsna653e95d3ff0'
            }
        });
    
        return response.data;
    } catch (error) {  
        throw error;
    }
};

function* checkCarDamageAreas(action: ReturnType<typeof checkCarDamageAreasRequest>) {
  try {
    const {
      payload: {
          image,
          draw_result
      }
    } = action;

    const url = `https://vehicle-damage-assessment.p.rapidapi.com/run`;

    const response: {
        draw_result: boolean,
        output_url: string,
        output: object,
        url_expiry: string,
        job_id: string
    } = yield call(callAPI, url, {
        image,
        draw_result
    });

    console.log(response);
    yield put(checkCarDamageAreasSuccess(response))
} catch (error) {
    console.log("error", error);
    yield put(checkCarDamageAreasFailure())
  }
}

const carDamageDetectionSaga = [
  takeLatest(actionsTypes.CHECK_CAR_DAMEGE_AREAS_REQUEST, checkCarDamageAreas),
];
export default carDamageDetectionSaga;
