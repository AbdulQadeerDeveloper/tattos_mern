// Action Types
import {
  FETCH_TATTOO_BEGIN,
  FETCH_TATTOO_SUCCESS,
  FETCH_TATTOO_FAILURE,
  UPDATE_TATTOO_SUCCESS,
  UPDATE_TATTOO_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  FETCH_PLACEMENT_REQUEST,
  FETCH_PLACEMENT_FAILURE,
  FETCH_PLACEMENT_SUCCESS
} from './actionType';

import { API_END_POINTS } from "../../../../services/index"

// Get Tatttoos_____________________________________
export const fetchTattoo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TATTOO_BEGIN });
    try {
      const response = await fetch(`${API_END_POINTS.GET_TATTOOS_ID}/${id}`);
      const tattooData = await response.json();
      dispatch({ type: FETCH_TATTOO_SUCCESS, payload: tattooData });
    } catch (error) {
      dispatch({ type: FETCH_TATTOO_FAILURE, payload: error });
    }
  };
};


// Update Tattoos_____________________________________
export const updateTattoo = (id, formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_END_POINTS.UPDATE_TATTOOS}/${id}`, {
        method: 'PUT',
        body: formData,
      });
      if (response.ok) {
        dispatch({ type: UPDATE_TATTOO_SUCCESS });
        alert('Tattoo updated successfully!');
      } else {
        throw new Error('Failed to update tattoo');
      }
    } catch (error) {
      dispatch({ type: UPDATE_TATTOO_FAILURE, payload: error });
      alert('An error occurred while updating the tattoo.');
    }
  };
};


// Get Category _______________________________________
export const fetchCategoryRequest = () => ({
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


export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchCategoryRequest());
    fetch(API_END_POINTS.GET_TATTOOS_CATEGORY)
      .then(response => response.json())
      .then(data => dispatch(fetchCategorySuccess(data)))
      .catch(error => dispatch(fetchCategoryFailure(error)));
  };
};


// Get Placement ______________________________________________________-
export const fetchPlacementRequest = () => ({
  type: FETCH_PLACEMENT_REQUEST,
});

export const fetchPlacementSuccess = (placement) => ({
  type: FETCH_PLACEMENT_SUCCESS,
  payload: placement,
});

export const fetchPlacementFailure = (error) => ({
  type: FETCH_PLACEMENT_FAILURE,
  payload: error,
});


export const fetchPlacement = () => {
  return (dispatch) => {
    dispatch(fetchPlacementRequest());
    fetch(API_END_POINTS.GET_TATTOOS_PLACEMENT)
      .then(response => response.json())
      .then(data => dispatch(fetchPlacementSuccess(data)))
      .catch(error => dispatch(fetchPlacementFailure(error)));
  };

};

