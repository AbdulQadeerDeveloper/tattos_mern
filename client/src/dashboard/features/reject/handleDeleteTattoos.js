// handleDeleteTattoos.js
import Swal from 'sweetalert2';
import {API_END_POINTS} from "../../../services/index"
const handleDeleteTattoos = async (tattooId) => {
    console.log(tattooId)
    const isConfirmed = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (isConfirmed.value) {
        try {
            const response = await fetch((`${API_END_POINTS.DELETE_TATTOOS}/${tattooId}`), {
                method: 'DELETE',
            });

            if (response.ok) {
                // On successful deletion, remove the tattoo from the UI
                // by filtering it out of the data array
                const newData = data.filter(tattoo => tattoo._id !== tattooId);
                setData(newData);

                Swal.fire(
                    'Deleted!',
                    'The tattoo has been deleted.',
                    'success'
                );
            } else {
                // Handle unsuccessful deletion
                Swal.fire(
                    'Error!',
                    'There was an issue deleting the tattoo. Please try again.',
                    'error'
                );
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
}
export default handleDeleteTattoos;