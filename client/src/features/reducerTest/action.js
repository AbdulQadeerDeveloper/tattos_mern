// Action Types
export const FETCH_TATTOOS_START = 'FETCH_TATTOOS_START';
export const FETCH_TATTOOS_SUCCESS = 'FETCH_TATTOOS_SUCCESS';
export const FETCH_TATTOOS_FAILURE = 'FETCH_TATTOOS_FAILURE';
import {API_END_POINTS} from "../../services/index"
// Fetch Tattoos Action Creator
export const fetchTattoos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TATTOOS_START });

    try {
      const response = await fetch(API_END_POINTS.HOME_TATTOOS_PAGE);
      const data = await response.json();
      dispatch({ type: FETCH_TATTOOS_SUCCESS, payload: data });
    } catch (error) {
      console.error("Failed to fetch tattoos:", error);
      dispatch({ type: FETCH_TATTOOS_FAILURE, payload: error });
    }
  };
};
