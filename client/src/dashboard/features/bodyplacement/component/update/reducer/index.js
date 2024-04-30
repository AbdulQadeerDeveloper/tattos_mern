import { SET_PLACEMENT_NAME } from './actionType'
const initialState = {
    Name: "",
};

const placementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACEMENT_NAME:
            return {
                ...state,
                Name: action.payload,
            };
        default:
            return state;
    }
};

export default placementReducer;
