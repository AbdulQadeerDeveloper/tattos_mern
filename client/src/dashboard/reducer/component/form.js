import React, { useState } from 'react'
import defaultImage from '../../asserts/899048ab0cc455154006fdb9676964b3.jpg';
import { useDispatch } from 'react-redux';
import { FaPen } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { updateUser } from '../action';


function Form() {
    const [logoPreview, setLogoPreview] = useState(defaultImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        dob: '',
        cellNumber: '',
        logo: null,

    });

    const validateForm = () => {
        let formIsValid = true;
        let newErrors = {};

        // validation for the users field
        if (!formData.username) {
            formIsValid = false;
            newErrors["username"] = "Username is required.";
        }
        if (!formData.email) {
            formIsValid = false;
            newErrors["email"] = "Email is required.";
        }
        if (!formData.cellNumber) {
            formIsValid = false;
            newErrors["cellNumber"] = "Phone number is required.";
        }
        if (!formData.address) {
            formIsValid = false;
            newErrors["address"] = "Address is required.";
        }
        if (!formData.firstname) {
            formIsValid = false;
            newErrors["firstname"] = "FirstName is required.";
        }
        if (!formData.lastname) {
            formIsValid = false;
            newErrors["lastname"] = "LastName is required.";
        }
        if (!formData.password) {
            formIsValid = false;
            newErrors["password"] = "Password is required.";
        }

        if (!formData.dob) {
            formIsValid = false;
            newErrors["dob"] = "Date of birth is required.";
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);

            // Handle logo separately
            if (e.target.name === 'logo') {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setLogoPreview(reader.result);
                };
                reader.readAsDataURL(filesArray[0]);
                setFormData({
                    ...formData,
                    [e.target.name]: filesArray[0]
                });
                setFormData({
                    ...formData,
                    [e.target.name]: filesArray
                });
            }



        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {

            await dispatch(updateUser(formData));
            navigate("/users");

            // If registration is successful, show success alert
            Swal.fire({
                icon: 'success',
                title: 'Profile User Created!',
                text: 'Your Profile User has been successfully created.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    //   navigate('/');
                }
            });

        } catch (error) {
            // Handle any errors, possibly show an error alert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with Profile registration!',
            });
        }
    };

    const getFieldClass = (fieldName) => {
        if (errors[fieldName]) {
            return "form-control is-invalid"; // Bootstrap class for invalid fields
        } else if (formData[fieldName]) {
            return "form-control is-valid"; // Bootstrap class for valid fields
        }
        return "form-control";
    };



    return (
        <div>
            <React.Fragment>

                <div className="modal-content" style={{ position: 'absolute', right: "40px", paddingBottom: "50px" }} id='formResponsive'>
                    <div className="modal-body" id='fragemt_form'>
                        <div className="bg-img433">
                            <strong><h1> ADD USER PROFILE</h1></strong>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <div className='text-center mb-3'>
                                            <label style={{ color: "#343a4c", textAlign: "left", alignContent: "left", display: "flex", justifyContent: "left" }}>Change Profile:<span style={{ color: 'red' }}>*</span></label>
                                            <br />
                                            <img
                                                src={logoPreview}
                                                alt="Uploaded"
                                                style={{ width: '150px', height: '150px', border: "1px solid #0000001f", cursor: 'pointer' }}
                                            />
                                            <FaPen className='pen1' onClick={() => document.getElementById('logoInput').click()} />
                                            <input
                                                type='file'
                                                id='logoInput'
                                                name='logo'
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                                accept="image/*"
                                            />
                                        </div>
                                    </div>

                                    <div className='col-lg-9' style={{ marginLeft: "70px" }}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group mt-3">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>First Name: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className={getFieldClass("firstname")} placeholder="First Name" />
                                                    {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                                                </div>



                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Username: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" name="username" value={formData.username} onChange={handleChange} className={getFieldClass("username")} placeholder="Username" />
                                                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>E-mail: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={getFieldClass("email")} placeholder="Email" />
                                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                                </div>

                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Phone Number: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" name="cellNumber" value={formData.cellNumber} onChange={handleChange} className={getFieldClass("cellNumber")} placeholder="Phone Number" />
                                                    {errors.cellNumber && <div className="invalid-feedback">{errors.cellNumber}</div>}
                                                </div>






                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mt-3">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Last Name: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className={getFieldClass("lastname")} placeholder="Last Name" />
                                                    {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Password: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type='password' name="password" value={formData.password} onChange={handleChange} className={getFieldClass("password")} placeholder="Password" />
                                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                                </div>

                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Date of Birth: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={getFieldClass("dob")} placeholder="Date of Birth" />
                                                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Address: <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" name="address" value={formData.address} onChange={handleChange} className={getFieldClass("address")} placeholder="Address" />
                                                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                                </div>



                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div style={{ display: "flex",width: "10%",  gap: "20px", justifyContent: 'end',marginLeft: "auto" }}>
                                    <button type='submit' className="btn pull-right">Save</button>
                                    <Link to="/users" className="btn pull-right">Cancel</Link>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        </div>
    )
}

export default Form;
