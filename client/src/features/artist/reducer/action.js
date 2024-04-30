import {FETCH_ARTIST_FAILURE, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_REQUEST} from "./actionType"
import {API_END_POINTS} from "../../../services/index"

export const fetchArtistRequest = () => ({
  type: FETCH_ARTIST_REQUEST,
});

export const fetchArtistSuccess = (artist) => ({
  type: FETCH_ARTIST_SUCCESS,
  payload: artist,
});

export const fetchArtistFailure = (error) => ({
  type: FETCH_ARTIST_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchArtist = () => {
  return (dispatch) => {
    dispatch(fetchArtistRequest());
    fetch(API_END_POINTS.HOME_ARTIST)
      .then(response => response.json())
      .then(data => dispatch(fetchArtistSuccess(data)))
      .catch(error => dispatch(fetchArtistFailure(error)));
  };
};