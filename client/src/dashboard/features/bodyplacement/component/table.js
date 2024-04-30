import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_END_POINTS } from "../../../../services/index"
function Tatt00_table(props) {
    const [placement, setPlacement] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleDeletePlacement = async (placementId) => {
        try {
            const response = await fetch(`${API_END_POINTS.DELETE_TATTOOS_PLACEMENT}/${placementId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                // Remove the deleted category from the state
                setPlacement(placement.filter(place => place._id !== placementId));
                alert("Are you Delete this Placement!")
            } else {
                console.error('Failed to delete placement ');
            }
        } catch (error) {
            console.error('Error deleting placement:', error);
        }
    };

    useEffect(() => {
        const HomePage = async () => {
            await props.fetchPlacement();
        }

        HomePage();
    }, [props.fetchCategory]);

    useEffect(() => {
        if (Array.isArray(props.tattooPlacement) && props.tattooPlacement.length) {
            setPlacement(props.tattooPlacement);
            setIsLoading(false);
        }
    }, [props.tattooPlacement]);

    return (
        <React.Fragment>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th className='text-center'>ID</th>
                                <th className='text-left'>Name</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {placement?.map((place, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-left'>{place?.name}</td>
                                    <td className='text-center' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                                        <Link to={`/placement/${place._id}`}>
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <span onClick={() => handleDeletePlacement(place._id)}>
                                            <i className="fa fa-trash"></i>
                                        </span>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Tatt00_table;
