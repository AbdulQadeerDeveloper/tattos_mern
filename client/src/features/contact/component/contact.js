import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { messageUser } from '../reducer/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const validateForm = () => {
        let formIsValid = true;
        let newErrors = {};

        // validation for the users field

        if (!formData.email) {
            formIsValid = false;
            newErrors["name"] = "Name is required.";
        }
        if (!formData.email) {
            formIsValid = false;
            newErrors["email"] = "Email is required.";
        }

        if (!formData.password) {
            formIsValid = false;
            newErrors["message"] = "Message is required.";
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            await dispatch(messageUser(formData));;
            toast.success("User Message Send successfully!");
            // navigate("/login");
        } catch (error) {
            toast.error("An error occurred while message the user.");
        }
    };
    // validation
    const getFieldClass = (fieldName) => {
        if (errors[fieldName]) {
            return "form-control is-invalid"; // Bootstrap class for invalid fields
        } else if (formData[fieldName]) {
            return "form-control is-valid"; // Bootstrap class for valid fields
        }
        return "form-control";
    };

    return (
        <React.Fragment>
            <ToastContainer />

            <div className='container-fluid p-0'>
                <div className='booking-banner' style={{ width: "100%" }}>
                    <img style={{ width: "100%", height: "350px" }} src='https://oracletattoogallery.com/wp-content/uploads/2022/04/How-Long-Will-A-New-Tattoo-Be-Sore-For-1-1000x423.png' />
                </div>
            </div>
            <div className='container mt-5'>
                <strong><h1>Contact Us</h1></strong>
                <hr />
                <div className='row'>
                    <div className='col-md-4'>

                        <div className='address'>
                            <div className='icon-address'><FaLocationDot /></div>
                            <div className='address-Information'>
                                <h2>Address</h2>
                                <span>Street# 2 , Main Faisalabad Road, Main Street, Jaranwala, 37250</span>
                            </div>
                        </div>
                        <div className='phone'>
                            <div className='icon-address'><FaPhone /></div>
                            <div className='address-Information'>
                                <h2>Phone</h2>
                                <p>+92 3170704493</p>
                                <p>+92 344 7879042</p>
                            </div>
                        </div>
                        <div className='Email'>
                            <div className='icon-address'><IoMdMail /></div>
                            <div className='address-Information'>
                                <h2>Email</h2>
                                <p>qadeer.dev@outlet.com</p>
                                <p>qadeerdeveloper312@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='message-contact'>
                            <h1>Send us a message</h1>
                            <p>
                                If you hou ave any work from me or any types of quries releted to my tattoos website vist , you can send me
                                message from here . It's my pleasure to help you.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={getFieldClass("name")} style={{
                                    border: 'none',
                                    background: "#e2e2e266",
                                    padding: " 10px"
                                }} placeholder="Enter your Name" />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={getFieldClass("email")} style={{
                                    border: 'none',
                                    background: "#e2e2e266",
                                    padding: " 10px"
                                }} placeholder="Enter Your Email" />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Enter Your Message" name="message" value={formData.message} onChange={handleChange} className={getFieldClass("message")} cols={4} rows={4} style={{
                                    border: 'none',
                                    background: "#e2e2e266",
                                    padding: " 10px"
                                }}>

                                </textarea>
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            <div style={{ display: "flex", gap: "20px", justifyContent: 'start' }}>
                                <button type='submit' className="btn pull-right">Send Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact