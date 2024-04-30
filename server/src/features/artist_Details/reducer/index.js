import { GET_LIST_ARTIS } from "./actionType";

let initialState = {
    tatoo_Info: [],
    tatoo_upload_List: [],
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_ARTIS:
            return {
                ...state,
                error: null,
                isLoading: true,
                tatoo_Info: action.payload.artis_info,
                tatoo_upload_List: action.payload.tattoo_upload,
            };
        default:
            return state;
    }
}