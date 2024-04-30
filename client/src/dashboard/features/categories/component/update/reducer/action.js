import { SET_CATEGORY_NAME } from './actionType'
import Swal from 'sweetalert2';
import { API_END_POINTS } from "../../../../../../services/index"
export const setCategoryName = (name) => ({
    type: SET_CATEGORY_NAME,
    payload: name,
});

export const fetchCategoryDetails = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${API_END_POINTS.GET_TATTOOS_CATEGORY}/${id}`);
        const result = await response.json();
        if (response.ok) {
            dispatch(setCategoryName(result.name));
          
        } 
    } catch (error) {
        console.error("Fetching category failed:", error);
        alert("An error occurred while fetching category details.");
    }
};

export const updateCategory = (id, name) => async (dispatch) => {
    try {
        const response = await fetch(`${API_END_POINTS.UPDATE_TATTOOS_CATEGORY}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (response.ok) {
            // console.log('Category updated successfully');
            dispatch(setCategoryName(name));
         
            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Category updated successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            console.error('Failed to update category');
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update category',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        console.error("Updating category failed:", error);
        // Show error alert
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while updating category',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};
