import { API_END_POINTS } from "../../../../services/index";
import Swal from 'sweetalert2';


const handleCheckClick = async (tattooId) => {


    // Function to update the status of the tattoo
    const updateStatus = async (status) => {
        const response = await fetch(`${API_END_POINTS.UPDATE_STATUS}/${tattooId}/status`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        // console.log(data.status); // Log the updated status for verification
        document.getElementById('status').innerText = `Status: ${data.status}`;
    };

    // Display a confirmation dialog using Swal
    Swal.fire({
        title: "Confirm your action",
        text: "Please select an action for this tattoo request:",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Approved',
        cancelButtonText: 'Rejected',
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire("Approved", "The tattoo request has been approved.", "success");
            updateStatus('Approved'); // Update status to 'Approved'
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Rejected", "The tattoo request has been rejected.", "error");
            updateStatus('Rejected'); // Update status to 'Rejected'
        }
       
    });
}
export default handleCheckClick;