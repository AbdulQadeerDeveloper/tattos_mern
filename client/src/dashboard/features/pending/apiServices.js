import { API_END_POINTS } from "../../../services/index";
import Swal from 'sweetalert2';
export const fetchTattoos = async () => {
    try {
        const response = await fetch(API_END_POINTS.GET_PENDING_STATUS);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching tattoos:', error);
        throw error;
    }
};

export const handleDeleteTattoos = async (tattooId) => {

    // console.log(tattooId)
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (result.value) { // Correctly using the result of Swal.fire()
        try {
            const response = await fetch((`${API_END_POINTS.DELETE_TATTOOS}/${tattooId}`), {
                method: 'DELETE',
            });

            if (response.ok) {
                // Your success handling code
            } else {
                // Your error handling code
            }
        } catch (error) {
            console.error('Error deleting tattoo:', error);
            Swal.fire(
                'Error!',
                'There was an error processing your request.',
                'error'
            );
        }
    }

};

