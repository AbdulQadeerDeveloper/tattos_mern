// actions.js
import { FETCH_UPLOAD_FAILURE, FETCH_UPLOAD_SUCCESS, FETCH_UPLOAD_REQUEST } from './actionType';
import {API_END_POINTS} from "../../../services/index"

export const fetchUploadRequest = () => ({
  type: FETCH_UPLOAD_REQUEST,
});

export const fetchUploadSuccess = (artistUpload) => ({
  type: FETCH_UPLOAD_SUCCESS,
  payload: artistUpload,
});

export const fetchUploadFailure = (error) => ({
  type: FETCH_UPLOAD_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchUpload = () => {
  return (dispatch) => {
    dispatch(fetchUploadRequest());
    fetch(API_END_POINTS.HOME_ARTIST_UPLOAD)
      .then(response => response.json())
      .then(data => dispatch(fetchUploadSuccess(data)))
      .catch(error => dispatch(fetchUploadFailure(error)));
  };
};

