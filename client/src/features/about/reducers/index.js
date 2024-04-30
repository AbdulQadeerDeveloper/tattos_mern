import {FETCH_TATTOOS_FAILURE, FETCH_TATTOOS_SUCCESS, FETCH_TATTOOS_REQUEST} from './actionType';

const initialState = {
    loading: false,
    tattoos: [],
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TATTOOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_TATTOOS_SUCCESS:
            return {
                loading: false,
                tattoos: action.payload,
                error: '',
            };
        case FETCH_TATTOOS_FAILURE:
            return {
                loading: false,
                tattoos: [],
                error: action.payload,
            };
        default:
            return state;
    }
};


