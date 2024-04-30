// actions.js
import axios from 'axios';
import { CREATE_TATTOO_FAILURE, CREATE_TATTOO_SUCCESS, CREATE_TATTOO_REQUEST } from './actionType';
import {API_END_POINTS} from "../../../services/index"

export const addTattoo = (formData, selectedFile) => async dispatch => {
    dispatch({ type: CREATE_TATTOO_REQUEST });

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (selectedFile) {
        data.append('tattooImage', selectedFile);
    }

    try {
        const response = await axios.post(API_END_POINTS.ADD_TATTOOS, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Upload successful', response);
        dispatch({ type: CREATE_TATTOO_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Upload error', error);
        dispatch({ type: CREATE_TATTOO_FAILURE, payload: error });
    }
};

