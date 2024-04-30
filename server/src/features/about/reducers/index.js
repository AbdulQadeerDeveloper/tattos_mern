import { GET_LIST_ABOUT_INFO } from './actionType'

const initialState = {
    tataoos_Details: [],
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_ABOUT_INFO:
            return {
                ...state,
                isLoading: true,
                tataoos_Details: action.payload.details_about_section

            };
        default:
            return state
    }
}