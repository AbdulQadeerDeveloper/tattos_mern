import { FETCH_BANNER_FAILURE, FETCH_BANNNER_SUCCESS, FETCH_BANNER_REQUEST, FETCH_BANNER_SLIDER_FAILURE, FETCH_BANNNER_SLIDER_SUCCESS, FETCH_BANNER_SLIDER_REQUEST, FETCH_GALLERY_SLIDER_FAILURE, FETCH_GALLERY_SLIDER_SUCCESS, FETCH_GALLERY_SLIDER_REQUEST } from "./actiontype"

const initialState = {
    loading: false,
    Homebanner: [],
    slider: [],
    gallery: [],
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        // Banner
        case FETCH_BANNER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BANNNER_SUCCESS:
            return {
                loading: false,
                Homebanner: action.payload,
                error: '',
            };
        case FETCH_BANNER_FAILURE:
            return {
                loading: false,
                Homebanner: [],
                error: action.payload,
            };
        // Slider
        case FETCH_BANNER_SLIDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BANNNER_SLIDER_SUCCESS:
            return {
                loading: false,
                slider: action.payload,
                error: '',
            };
        case FETCH_BANNER_SLIDER_FAILURE:
            return {
                loading: false,
                slider: [],
                error: action.payload,
            };
        // Galeery
        case FETCH_GALLERY_SLIDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_GALLERY_SLIDER_SUCCESS:
            return {
                loading: false,
                gallery: action.payload,
                error: '',
            };
        case FETCH_GALLERY_SLIDER_FAILURE:
            return {
                loading: false,
                gallery: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
