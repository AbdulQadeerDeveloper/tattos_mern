import axios from 'axios';
import { API_END_POINTS } from "../../../../services/index"
import {CREATE_TATTOO_FAILURE, CREATE_TATTOO_SUCCESS, CREATE_TATTOO_REQUEST, FETCH_TATTOOS_START, FETCH_TATTOOS_SUCCESS, FETCH_TATTOOS_FAILURE } from './actionType'

// .;______________________________________________________________________________________________

// Fetch Tattoos Action Creator
export const fetchTattoos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TATTOOS_START });

    try {
      const response = await fetch(API_END_POINTS.GET_TATTOOS_ID);
      const data = await response.json();
      dispatch({ type: FETCH_TATTOOS_SUCCESS, payload: data });
    } catch (error) {
      console.error("Failed to fetch tattoos:", error);
      dispatch({ type: FETCH_TATTOOS_FAILURE, payload: error });
    }
  };
};
// .;______________________________________________________________________________________________

// POST & CREATE Async action creator
export const addTattoo = (formData, selectedFile) => async dispatch => {
  dispatch({ type: CREATE_TATTOO_REQUEST });

  const data = new FormData();
  Object.keys(formData).forEach(key => data.append(key, formData[key]));
  if (selectedFile) {
    data.append('tattooImage', selectedFile);
  }

  try {
    const response = await axios.post(API_END_POINTS.ADD_TATTOOS, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Upload successful', response);
    dispatch({ type: CREATE_TATTOO_SUCCESS, payload: response.data });
    // Optionally, clear the form and selected file here
  } catch (error) {
    console.error('Upload error', error);
    dispatch({ type: CREATE_TATTOO_FAILURE, payload: error });
  }
};

