import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {API_END_POINTS} from "../../../../services/index"

function Tatt00_table(props) {
   
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HomePage = async () => {
            await props.fetchCategory();
        }

        HomePage();
    }, [props.fetchCategory]);

    useEffect(() => {
        if (Array.isArray(props.getCategory) && props.getCategory.length) {
            setCategory(props.getCategory);
            setIsLoading(false);
        }
    }, [props.getCategory]);


    const handleDelete = async (categoryId) => {
        try {
            const response = await fetch((`${API_END_POINTS.DELETE_TATTOOS_CATEGORY}/${categoryId}`), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                // Remove the deleted category from the state
                setCategory(category.filter(category => category._id !== categoryId));
                alert("Are you Delete this Category!")
            } else {
                console.error('Failed to delete category ');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };


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
                            {category?.map((category, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-left'>{category?.name}</td>
                                    <td className='text-center' style={{display:"flex", gap:"20px", alignItems:"center", justifyContent:"center"}}>
                                        <Link to={`/update/${category._id}`}>
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <span  onClick={() => handleDelete(category._id)}>
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
