// actions.js
import axios from 'axios';
import {API_END_POINTS} from "../../../services/index"

// messageUser
export const messageUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(API_END_POINTS.SEND_MESSAGE, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    dispatch({
      type: "MESSAGE_SEND_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "MESSAGE_SEND_FAIL",
      payload: error.response.data,
    });
  }
};

