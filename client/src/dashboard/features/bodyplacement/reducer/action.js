// actions.js
import axios from 'axios';
import {DELETE_PLACEMENT_SUCCESS,DELETE_PLACEMENT_FAILURE,ADD_PLACEMENT_REQUEST, ADD_PLACEMENT_SUCCESS, ADD_PLACEMENT_FAILURE, FETCH_PLACEMENT_REQUEST, FETCH_PLACEMENT_SUCCESS, FETCH_PLACEMENT_FAILURE } from './actionType';

import {API_END_POINTS} from "../../../../services/index"

export const addPlacement = (name) => async dispatch => {
  dispatch({ type: ADD_PLACEMENT_REQUEST });

  try {
    const response = await axios.post(API_END_POINTS.ADD_TATTOOS_PLACEMENT, { name });
    dispatch({ type: ADD_PLACEMENT_SUCCESS, payload: response.data });
    console.log('Category added successfully');
  } catch (error) {
    console.error('Failed to add category', error);
    dispatch({ type: ADD_PLACEMENT_FAILURE, payload: error });
  }
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


export  const fetchPlacement = () => {
  return (dispatch) => {
    dispatch(fetchPlacementRequest());
    fetch(API_END_POINTS.GET_TATTOOS_PLACEMENT)
      .then(response => response.json())
      .then(data => dispatch(fetchPlacementSuccess(data)))
      .catch(error => dispatch(fetchPlacementFailure(error)));
  };
  
};



// Action creator for successful category deletion
export const deletePlacementSuccess = (placementId) => ({
  type: DELETE_PLACEMENT_SUCCESS,
  payload: placementId,
});

// Action creator for failed category deletion
export const deletePlacementFailure = (error) => ({
  type: DELETE_PLACEMENT_FAILURE,
  payload: error,
});

// Thunk action to delete a category
export const deletePlacement = (placementId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_END_POINTS.DELETE_TATTOOS_CATEGORY}/${placementId}`);
      dispatch(deletePlacementSuccess(placementId));
    } catch (error) {
      dispatch(deletePlacementFailure(error));
    }
  };
};




