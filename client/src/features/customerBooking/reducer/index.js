const initialState = {
    data: null,
    error: null,
    loading: false,
};

export const CustomerFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CUSTOMER_FORM_SUBMITTED_SUCCESS':
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case 'CUSTOMER_FORM_SUBMITTED_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
