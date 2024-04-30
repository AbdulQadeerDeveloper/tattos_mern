// reducers/businessReducer.js

const initialState = {
    data: null,
    error: null,
    loading: false,
};

export const businessFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUSINESS_FORM_SUBMITTED_SUCCESS':
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case 'BUSINESS_FORM_SUBMITTED_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
