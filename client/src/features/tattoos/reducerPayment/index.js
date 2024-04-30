import { SET_BASIC_PRICE, SET_BUSINESS_PRICE, SET_PREMIUM_PRICE } from './actionType';

const initialState = {
    basic: '$2.99',
    business: '$3.99',
    premium: '$8.99'
};

function priceReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BASIC_PRICE:
            return { ...state, basic: action.payload };
        case SET_BUSINESS_PRICE:
            return { ...state, business: action.payload };
        case SET_PREMIUM_PRICE:
            return { ...state, premium: action.payload };
        default:
            return state;
    }
}

export default priceReducer;
