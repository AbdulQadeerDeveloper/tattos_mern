import axios from 'axios';
import { API_END_POINTS } from '../../../services/index';

export const submitCustomerForm = (formData) => async (dispatch) => {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
        if (key === 'images') {
            formData.images.forEach(file => {
                data.append('images', file);
            });
        } else {
            data.append(key, formData[key]);
        }
    });

    try {
        const response = await axios.post(API_END_POINTS.CUSTOMER_DETAILS_FORM, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: 'CUSTOMER_FORM_SUBMITTED_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'CUSTOMER_FORM_SUBMITTED_FAIL',
            payload: error.response ? error.response.data : "Error submitting form"
        });
    }
};
