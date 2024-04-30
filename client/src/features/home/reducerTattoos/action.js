import { FETCH_BANNER_FAILURE, FETCH_BANNNER_SUCCESS, FETCH_BANNER_REQUEST, FETCH_BANNER_SLIDER_FAILURE, FETCH_BANNNER_SLIDER_SUCCESS, FETCH_BANNER_SLIDER_REQUEST, FETCH_GALLERY_SLIDER_FAILURE, FETCH_GALLERY_SLIDER_SUCCESS, FETCH_GALLERY_SLIDER_REQUEST } from "./actiontype"
import {API_END_POINTS} from "../../../services/index"
// Thunk action creator Banner
export const fetchBannerRequest = () => ({
  type: FETCH_BANNER_REQUEST,
});

export const fetchBannerSuccess = (Homebanner) => ({
  type: FETCH_BANNNER_SUCCESS,
  payload: Homebanner,
});

export const fetchBannerFailure = (error) => ({
  type: FETCH_BANNER_FAILURE,
  payload: error,
});

// Thunk action creator Banner
export const fetchHomeBanner = () => {
  return (dispatch) => {
    dispatch(fetchBannerRequest());
    fetch(API_END_POINTS.HOME_TATTOOS_PAGE)
      .then(response => response.json())
      .then(data => dispatch(fetchBannerSuccess(data)))
      .catch(error => dispatch(fetchBannerFailure(error)));
  };
};

// __________________________________________________________________________________________________________________________________________
// Thunk action creator Slider
const fetchSliderRequest = () => ({
  type: FETCH_BANNER_SLIDER_REQUEST,
});

export const fetchSliderSuccess = (slider) => ({
  type: FETCH_BANNNER_SLIDER_SUCCESS,
  payload: slider,
});

export const fetchSliderFailure = (error) => ({
  type: FETCH_BANNER_SLIDER_FAILURE,
  payload: error,
});

// Thunk action creator Slider
export const fetchSlider = () => {
  return (dispatch) => {
    dispatch(fetchSliderRequest());
    fetch(API_END_POINTS.HOME_TATTOOS_PAGE)
      .then(response => response.json())
      .then(data => dispatch(fetchSliderSuccess(data)))
      .catch(error => dispatch(fetchSliderFailure(error)));
  };
};

// __________________________________________________________________________________________________________________________________________

// Thunk action creator Gallery
const fetchGallleryRequest = () => ({
  type: FETCH_GALLERY_SLIDER_REQUEST,
});


export const fetchGallerySuccess = (gallery) => ({
  type: FETCH_GALLERY_SLIDER_SUCCESS,
  payload: gallery,
});

export const fetchGalleryFailure = (error) => ({
  type: FETCH_GALLERY_SLIDER_FAILURE,
  payload: error,
});

// Thunk action creator Slider
export const fetchGallery = () => {
  return (dispatch) => {
    dispatch(fetchGallleryRequest());
    fetch(API_END_POINTS.HOME_TATTOOS_PAGE)
      .then(response => response.json())
      .then(data => dispatch(fetchGallerySuccess(data)))
      .catch(error => dispatch(fetchGalleryFailure(error)));
  };
};