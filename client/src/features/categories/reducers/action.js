// actions.js
import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_REQUEST } from './actionType';
import {API_END_POINTS} from "../../../services/index"
export const fetchSearchTattoos = (searchTerm = '') => async dispatch => {
  try {
    const url = `${API_END_POINTS.SEARCH_TATTOOS}/${encodeURIComponent(searchTerm)}`;
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch({ type: 'ACTION_TYPE', payload: data.tattoos });
  } catch (error) {
    console.error("Fetch tattoos error:", error);
  
  }
};


export const fetchUCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (category) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchUCategoryRequest());
    fetch("http://localhost:8080/addTattoosById")
      .then(response => response.json())
      .then(data => dispatch(fetchCategorySuccess(data)))
      .catch(error => dispatch(fetchCategoryFailure(error)));
  };
};



