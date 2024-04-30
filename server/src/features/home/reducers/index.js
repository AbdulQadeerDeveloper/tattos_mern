import { GET_LIST } from "./actionTypes";

let initialState = {
    tatoo_Banner_Home: [],
    slider_Banner_Home:[],
    slider2_Banner_Home:[],
    video_home_slider: [],
    artist_Follower: [],
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                error: null,
                isLoading: true,
                tatoo_Banner_Home: action.payload.tatoo_Banner,
                slider_Banner_Home: action.payload.tattoo_slider,
                slider2_Banner_Home: action.payload.tattoo_slider2,
                video_home_slider: action.payload.video_slider,
                artist_Follower: action.payload.Artist_Follower
            };
        default:
            return state;
    }
}