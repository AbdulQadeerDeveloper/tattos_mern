import React, { useState } from 'react'
import { FaPen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitCustomerForm } from '../reducer/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultImage from '../../../dashboard/asserts/899048ab0cc455154006fdb9676964b3.jpg';
const CustomerBooking = () => {
    const [errors, setErrors] = useState({})
    const [imagePreviews, setImagePreviews] = useState([]); // For multiple image previews
    const [logoPreview, setLogoPreview] = useState(defaultImage);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        email: '',
        brandname: '',
        address: '',
        cellNumber: '',
        country: '',
        zipcode: '',
        city: '',
        description: '',
        logo: null,
        images: []
    });

    // handle chnage name values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Reset the error for the current field if the user starts typing
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };


    // handle files change signal and multile images methed
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
            } else { // Handle multiple images
                setImagePreviews([]); // Clear previous previews
                const readers = filesArray.map(file => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImagePreviews(prev => [...prev, reader.result]);
                    };
                    reader.readAsDataURL(file);
                    return reader;
                });
                // console.log(readers, "readers");

                setFormData({
                    ...formData,
                    [e.target.name]: filesArray
                });
            }
        }
    };

    const getFieldClass = (fieldName) => {
        return errors[fieldName] ? "form-control is-invalid" : "form-control";
    };
  

    const validateForm = () => {
        let formIsValid = true;
        let newErrors = {};
        // Add validation checks here
    
        if (!formData.title.trim()) {
            formIsValid = false;
            newErrors["title"] = "Title is required.";
            newErrors["email"] = "Email is required.";
            newErrors["images"] = " Images is required.";
            newErrors["logo"] = " Brand logo is required.";
            newErrors["description"] = "Description is required.";
            newErrors["zipcode"] = "Zipcode is required.";
            newErrors["country"] = "Country is required.";
            newErrors["cellNumber"] = "CellNumber is required.";
            newErrors["address"] = "Address is required.";
            newErrors["brandname"] = "Brandname is required.";
            newErrors["city"] = "City is required.";
        }
        // Add more validation checks as needed...
    
        setErrors(newErrors);
        return formIsValid;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            toast.error("Please fix the errors in the form.");
            return;
        }
    
        try {
            await dispatch(submitCustomerForm(formData));
            toast.success("Business Form successfully created!");
        } catch (error) {
            toast.error("An error occurred while creating the Business form.");
        }
    };
    return (
        <React.Fragment>
            <ToastContainer />

            <div className="container mt-5 pt-5">
                <strong><h1>Customer Details</h1></strong>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <div className='text-center mb-3'>
                                <label style={{ color: "#343a4c", textAlign: "left", alignContent: "left", display: "flex", justifyContent: "left" }}>Change Logo:<span style={{ color: 'red' }}>*</span></label>
                                <br />
                                <img
                                    src={logoPreview}
                                    alt="Uploaded"
                                    style={{ width: '150px', height: '150px', border: "1px solid #0000001f", cursor: 'pointer' }}
                                />
                                <FaPen className='pen' onClick={() => document.getElementById('logoInput').click()} />
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

                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group mt-3">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Title: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" name="title" onChange={handleChange} className={getFieldClass("title")} placeholder="Business Title" />
                                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div className="form-group mt-3">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Brand Name: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" name="brandname" onChange={handleChange} className={getFieldClass("brandname")} placeholder="Brand Name" />
                                        {errors.brandname && <div className="invalid-feedback">{errors.brandname}</div>}
                                    </div>


                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>

                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>E-mail: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" name="email" onChange={handleChange} className={getFieldClass("email")} placeholder=" Business Email" />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Phone Number: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" name="cellNumber" onChange={handleChange} className={getFieldClass("cellNumber")} placeholder="Phone Number" />
                                        {errors.cellNumber && <div className="invalid-feedback">{errors.cellNumber}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Zipcode / Postal code<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" name="zipcode" onChange={handleChange} className={getFieldClass("zipcode")} placeholder="Zip/postal" />
                                        {errors.zipcode && <div className="invalid-feedback">{errors.zipcode}</div>}
                                    </div>


                                </div>
                                <div className='col-md-6'>


                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Shop Address: <span style={{ color: 'red' }}>*</span></label>
                                        <input type='text' name="address" onChange={handleChange} className={getFieldClass("address")} placeholder="Shop Address" />
                                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Country: <span style={{ color: 'red' }}>*</span></label><br />
                                        <input type="text" name="country" onChange={handleChange} className={getFieldClass("country")} placeholder="Country" />
                                        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>City: <span style={{ color: 'red' }}>*</span></label><br />
                                        <input type="text" name="city" onChange={handleChange} className={getFieldClass("city")} placeholder="City" />
                                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>

                                    <div className="form-group mt-3">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Discription: <span style={{ color: 'red' }}>*</span></label><br />
                                        <textarea rows="4" cols="67" name="description" onChange={handleChange}></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="form-group mt-3">
                                        <label style={{ color: "#343a4c", paddingBottom: "10px" }}>Customer Multiples Images: <span style={{ color: 'red' }}>*</span></label>
                                        <br />
                                        <input type="file" name='images' multiple onChange={handleFileChange} />
                                    </div>
                                    {/* Render image previews */}
                                    <div className='row'>
                                        {imagePreviews.map((imageSrc, index) => (
                                            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                                <img src={imageSrc} alt={`preview-${index}`} className="img-fluid" style={{ width: '150px', height: '150px' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div style={{ display: "flex", gap: "20px", justifyContent: 'end' }}>
                        <button type='submit' className="btn pull-right">Save</button>
                        <span><Link to="/" className="btn pull-right">Cancel</Link></span>
                    </div>


                </form>
            </div>

        </React.Fragment>
    )
}

export default CustomerBooking