import { SET_PLACEMENT_NAME } from './actionType'
import Swal from 'sweetalert2';
import { API_END_POINTS } from "../../../../../../services/index";


export const setPlacementName = (name) => ({
    type: SET_PLACEMENT_NAME,
    payload: name,
});

export const fetchPlacementDetails = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${API_END_POINTS.GET_TATTOOS_PLACEMENT}/${id}`);
        const result = await response.json();
        if (response.ok) {
            dispatch(setPlacementName(result.name));
        } else {
            alert("Failed to fetch placement tattoo details. Please try again later.");
        }
    } catch (error) {
        console.error("Fetching placement tattoo failed:", error);
        alert("An error occurred while fetching placement tattoo details.");
    }
};

export const updatePlacement = (id, name) => async (dispatch) => {
    try {
        const response = await fetch(`${API_END_POINTS.UPDATE_TATTOOS_PLACEMENT}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (response.ok) {
            console.log('Placement tattoo updated successfully');
            dispatch(setPlacementName(name));
           
            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Placement updated successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            console.error('Failed to update placement');
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update placement',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        console.error("Updating placement failed:", error);
        // Show error alert
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while updating placement',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};
