import { GET_LIST_CATEGORIES } from "./actionType";

let initialState = {
    tatoo_Categories: [],
    tatoo_Categories_List: [],
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_CATEGORIES:
            return {
                ...state,
                error: null,
                isLoading: true,
                tatoo_Categories: action.payload.categories,
                tatoo_Categories_List: action.payload.tattoo_Categories,
            };
        default:
            return state;
    }
}