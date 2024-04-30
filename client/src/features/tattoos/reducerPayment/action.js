import { SET_BASIC_PRICE, SET_BUSINESS_PRICE, SET_PREMIUM_PRICE } from './actionTypes';

export const setBasicPrice = (price) => ({
    type: SET_BASIC_PRICE,
    payload: price
});

export const setBusinessPrice = (price) => ({
    type: SET_BUSINESS_PRICE,
    payload: price
});

export const setPremiumPrice = (price) => ({
    type: SET_PREMIUM_PRICE,
    payload: price
});
