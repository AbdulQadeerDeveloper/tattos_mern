// googleLoginUser
import axios from 'axios';
import { API_END_POINTS } from "../../../services/index"

export const googleLoginUser = () => async dispatch => {
    try {
        dispatch({ type: "GOOGLE_REQUEST" });
        const response = await axios.get(API_END_POINTS.USER_GOOGLE_LOGIN, { withCredentials: true });
        const data = response.data;
        console.log(data)
        dispatch({
            type: "GOOGLE_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "GOOGLE_FAILURE",
            payload: error.response ? error.response.data.message : "Error Google Login",
        });

    }
};

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: "LOGOUT",
    });
};