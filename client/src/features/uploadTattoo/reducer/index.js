// reducer.js
import { CREATE_TATTOO_FAILURE, CREATE_TATTOO_SUCCESS, CREATE_TATTOO_REQUEST  } from './actionType';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const tattooReducerCreate = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TATTOO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_TATTOO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case CREATE_TATTOO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default tattooReducerCreate;
