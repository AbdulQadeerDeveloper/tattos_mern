import { SEARCH_TATTOOS_REQUEST, SEARCH_TATTOOS_SUCCESS, SEARCH_TATTOOS_FAILURE, CREATE_TATTOO_FAILURE, CREATE_TATTOO_SUCCESS, CREATE_TATTOO_REQUEST, FETCH_TATTOOS_START, FETCH_TATTOOS_SUCCESS, FETCH_TATTOOS_FAILURE } from './actionType'

let initialState = {
    tattoos: [],
    data: null,
    isLoading: false,
    error: null
};

const tattooReducer1 = (state = initialState, action) => {
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

        case FETCH_TATTOOS_START:
            return { ...state, loading: true };
        case FETCH_TATTOOS_SUCCESS:
            return { ...state, loading: false, tattoos: action.payload };
        case FETCH_TATTOOS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case SEARCH_TATTOOS_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_TATTOOS_SUCCESS:
            return { ...state, isLoading: false, tattoos: action.payload };
        case SEARCH_TATTOOS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}
export default tattooReducer1;