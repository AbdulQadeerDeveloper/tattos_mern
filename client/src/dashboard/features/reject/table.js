import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchTattoos, handleDeleteTattoos } from './apiServices';
import BACKEND_URL_APPLICATION from "../../../utils/index";


function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await fetchTattoos();
                setData(jsonData);
            } catch (error) {
                Swal.fire(
                    'Error!',
                    'There was an issue fetching tattoos. Please try again.',
                    'error'
                );
            }
        };

        fetchData();
    }, []);
    return (
        <React.Fragment>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th className='text-center'>Sn.no</th>
                                <th>Title</th>
                                <th className='text-center'>Image</th>
                                <th className='text-center'>Placement</th>
                                <th className='text-center'>Category</th>
                                <th className='text-center'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((tattoo, index) => (
                                <tr key={tattoo.id || index}>
                                    <td className='text-center align-content-center'>{index + 1}</td>
                                    <td className=' align-content-center'>{tattoo.tattoosTitle}</td>
                                    <td className='text-center'><img src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} style={{ width: '50px', height: '50px' }} /></td>
                                    <td className='text-center align-content-center'>{tattoo.placement?.name}</td>
                                    <td className='text-center'>{tattoo.categories?.name}</td>
                                    <td className='text-center'>
                                        <a onClick={() => handleDeleteTattoos(tattoo._id)}>
                                            <i className="fa fa-trash" style={{ marginLeft: '10px' }}></i>
                                        </a>
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

export default Table;
