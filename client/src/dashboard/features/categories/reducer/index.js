import {
    ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE,
    FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE

} from './actionType';

const initialState = {
    loading: false,
    data: null,
    category: null,
    error: null,
};

const fetchCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case ADD_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
                error: null,
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                category: [],
                error: action.payload,
            };
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                category: state.category.filter(category => category._id !== action.payload),
                error: null,
            };
        case DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default fetchCategoryReducer;
