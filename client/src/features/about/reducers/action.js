import { FETCH_TATTOOS_FAILURE, FETCH_TATTOOS_SUCCESS, FETCH_TATTOOS_REQUEST } from "./actionType"
import {API_END_POINTS} from "../../../services/index"
export const fetchTattooRequest = () => ({
  type: FETCH_TATTOOS_REQUEST,
});

export const fetchTattooSuccess = (tattoos) => ({
  type: FETCH_TATTOOS_SUCCESS,
  payload: tattoos,
});

export const fetchTattooFailure = (error) => ({
  type: FETCH_TATTOOS_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchTattoo = () => {
  return (dispatch) => {
    dispatch(fetchTattooRequest());
    fetch(API_END_POINTS.HOME_TATTOOS)
      .then(response => response.json())
      .then(data => dispatch(fetchTattooSuccess(data)))
      .catch(error => dispatch(fetchTattooFailure(error)));
  };
};
