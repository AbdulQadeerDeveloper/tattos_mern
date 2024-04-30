import { FETCH_UPLOAD_FAILURE, FETCH_UPLOAD_SUCCESS, FETCH_UPLOAD_REQUEST } from './actionType';

const initialState = {
    loading: false,
    artistUpload: [],
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_UPLOAD_SUCCESS:
            return {
                loading: false,
                artistUpload: action.payload,
                error: '',
            };
        case FETCH_UPLOAD_FAILURE:
            return {
                loading: false,
                artistUpload: [],
                error: action.payload,
            };
        default:
            return state;
    }
};


