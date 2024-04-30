import { UPDATE_USER_FAILED, USER_UPDATED_SUCCESSFULLY} from './actionType';
// Initial state
const INITIAL_STATE = {
    profileUser: null,
    data: null,
    token: null,
    isAuthenticated: false,
    loading: false,

};

const userAndTattooReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_UPDATED_SUCCESSFULLY:
            return {
                ...state,
                profileUser: action.payload,
                token: action.payload.token,
                isAuthenticated: true,
                loading: true,

            };

        case UPDATE_USER_FAILED:
            return {
                ...state,
                profileUser: null,
                token: null,
                isAuthenticated: false,
                loading: false,

            };


        default:
            return state;
    }
};

export default userAndTattooReducer;
