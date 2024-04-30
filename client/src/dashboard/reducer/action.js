// updateUserActions.js
import axios from 'axios';
import {UPDATE_USER_FAILED, USER_UPDATED_SUCCESSFULLY } from './actionType';
import {API_END_POINTS} from "../../services/index"

// update user
export const updateUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(API_END_POINTS.USER_UPDATE, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = response.data;
        console.log(data)
        dispatch({
            type: USER_UPDATED_SUCCESSFULLY,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAILED,
            payload: error.response.data,
        });
    }
};





