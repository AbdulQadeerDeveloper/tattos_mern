import {SET_CATEGORY_NAME} from './actionType'
const initialState = {
    Name: "",
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_NAME:
            return {
                ...state,
                Name: action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
