import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import {API_END_POINTS} from "../../../../services/index"
function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_END_POINTS.GET_USER_LOGIN);
            setUsers(response.data);
        } catch (error) {
            console.error("There was an error fetching the user data:", error);
        }
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`${API_END_POINTS.DELETE_USER_LOGIN}/${userId}`);
            const updatedUsers = users.filter(user => user._id !== userId);
            setUsers(updatedUsers);
            toast.success("User deleted successfully!"); // Show success toast
        } catch (error) {
            console.error("There was an error deleting the user:", error);
            toast.error("Failed to delete user."); // Show error toast
        }
    };
    return (
        <React.Fragment>
            <ToastContainer />
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th className='text-center'>Sn.no</th>
                                <th className='text-center'>User</th>
                                <th>Role</th>
                                <th>Username</th>
                                <th className='text-left'>E-mail</th>
                                <th>Phone</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id || index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-center'>
                                        <span style={{
                                            background: 'black',
                                            color: 'white',
                                            fontSize: '26px',
                                            border: '0',
                                            borderRadius: '100%',
                                            padding: '8px 17px',
                                            textTransform: "uppercase"
                                        }}>
                                            {user?.username.charAt(0)}
                                        </span>
                                    </td>
                                    <td >{user.role}</td>
                                    <td>{user.username}</td>
                                    <td className='text-left'>{user.email}</td>
                                    <td>{user.cellNumber}</td>
                                    <td className='text-center align-content-center'>
                                        <Link to="/user">
                                            <i className="fa fa-edit" style={{ marginRight: '10px' }}></i>
                                        </Link>
                                        <a href="#" onClick={() => handleDelete(user._id)}>
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

export default UserTable;
