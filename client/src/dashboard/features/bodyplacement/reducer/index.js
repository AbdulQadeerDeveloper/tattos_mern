// reducers.js
import { DELETE_PLACEMENT_SUCCESS, DELETE_PLACEMENT_FAILURE, ADD_PLACEMENT_REQUEST, ADD_PLACEMENT_SUCCESS, ADD_PLACEMENT_FAILURE, FETCH_PLACEMENT_REQUEST, FETCH_PLACEMENT_SUCCESS, FETCH_PLACEMENT_FAILURE } from './actionType';

const initialState = {
    loading: false,
    data: [],
    placement: [],
    error: null,
};

const placementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_PLACEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case ADD_PLACEMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_PLACEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PLACEMENT_SUCCESS:
            return {
                loading: false,
                placement: action.payload,
                error: '',
            };
        case FETCH_PLACEMENT_FAILURE:
            return {
                loading: false,
                placement: [],
                error: action.payload,
            };
        case DELETE_PLACEMENT_SUCCESS:
            return {
                ...state,
                placement: state.placement.filter(placement => placement._id !== action.payload),
                error: null,
            };
        case DELETE_PLACEMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
            };


        default:
            return state;
    }
};

export default placementReducer;
