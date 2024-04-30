// actions.js
import {
  FETCH_TATTOO_DETAILS_REQUEST,
  FETCH_TATTOO_DETAILS_SUCCESS,
  FETCH_TATTOO_DETAILS_FAILURE,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_REQUEST
} from './actionType';

import {API_END_POINTS} from "../../../services/index"

export const fetchTattooDetailsRequest = () => ({
  type: FETCH_TATTOO_DETAILS_REQUEST,
});

export const fetchTattooDetailsSuccess = (details) => ({
  type: FETCH_TATTOO_DETAILS_SUCCESS,
  payload: details,
});

export const fetchTattooDetailsFailure = (error) => ({
  type: FETCH_TATTOO_DETAILS_FAILURE,
  payload: error,
});

export const fetchTattooDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchTattooDetailsRequest());
    try {
      const response = await fetch(`${API_END_POINTS.HOME_TATTOOS_CATEGORY_ID}/${id}`);
      const data = await response.json();
      dispatch(fetchTattooDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchTattooDetailsFailure(error.message));
    }
  };
};



// __________________________________________________________________________________________

// Action Creators for Creating Comment Data
export const createCommentRequest = () => ({
  type: CREATE_COMMENT_REQUEST,
});

export const createCommentSuccess = (data) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload: data,
});

export const createCommentFailure = (error) => ({
  type: CREATE_COMMENT_FAILURE,
  payload: error,
});
export const createComment = (newData,tattooId) => {
  return (dispatch) => {
    dispatch(createCommentRequest());
    fetch(`${API_END_POINTS.ADD_COMMENT_USER}/${tattooId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => dispatch(createCommentSuccess(data)))
      .catch(error => dispatch(createCommentFailure(error)));
  };
};