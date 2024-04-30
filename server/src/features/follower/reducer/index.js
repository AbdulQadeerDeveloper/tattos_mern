import { GET_LIST_FOLLOWER } from './actionType'

const initialState = {
    tataoos_follower: [],
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_FOLLOWER:
            return {
                ...state,
                isLoading: true,
                tataoos_follower: action.payload.tattoo_follower

            };
        default:
            return state
    }
}