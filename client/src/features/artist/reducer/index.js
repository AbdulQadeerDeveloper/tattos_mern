import {FETCH_ARTIST_FAILURE, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_REQUEST} from "./actionType"

const initialState = {
    loading: false,
    artist: [],
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ARTIST_SUCCESS:
            return {
                loading: false,
                artist: action.payload,
                error: '',
            };
        case FETCH_ARTIST_FAILURE:
            return {
                loading: false,
                artist: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
