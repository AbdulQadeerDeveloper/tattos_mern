import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../reducers/action';
import Swal from 'sweetalert2';
import chooseFileImage from './asserts/userlogo.png';
import bannerImage from './asserts/PngItem_4726291.png';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
    cellNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the error for the current field if the user starts typing
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validation checks
    if (!formData.username.trim()) {
      formIsValid = false;
      newErrors["username"] = "Username is required.";
    }
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors["email"] = "Email is required.";
    }
    if (!formData.cellNumber.trim()) {
      formIsValid = false;
      newErrors["cellNumber"] = "Phone number is required.";
    }
    if (!formData.address.trim()) {
      formIsValid = false;
      newErrors["address"] = "Address is required.";
    }
    if (!formData.firstname.trim()) {
      formIsValid = false;
      newErrors["firstname"] = "First name is required.";
    }
    if (!formData.lastname.trim()) {
      formIsValid = false;
      newErrors["lastname"] = "Last name is required.";
    }
    if (!formData.password.trim()) {
      formIsValid = false;
      newErrors["password"] = "Password is required.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      await dispatch(registerUser(formData));
      Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: 'Your account has been successfully created.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong with registration!',
      });
    }
  };

  // Adjusted to simply return "form-control" as we're dynamically handling error visibility
  const getFieldClass = (fieldName) => {
    return errors[fieldName] ? "form-control is-invalid" : "form-control";
  };
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-7' id='loginImages'>
            <img src={bannerImage} alt="Banner" style={{ marginTop: '90px', width: '90%' }} />
          </div>
          <div className='col-md-5' style={{ marginTop: '60px' }} id='logincol5'>
            <div className="modal-content mt-5" id="fragemt_form">
              <div className="modal-body">
                <div className="bg-img433">
                  <form onSubmit={handleSubmit}>
                    <div className='text-center'>
                      <img src={chooseFileImage} alt="User logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                    <div className='row'>
                      <div className="form-group mt-3 col-6">
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className={getFieldClass("firstname")} placeholder="First Name" />
                        {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                      </div>
                      <div className="form-group mt-3 col-6">
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className={getFieldClass("lastname")} placeholder="Last Name" />
                        {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                      </div>
                    </div>
                    <div className='row'>
                      <div className="form-group col-6">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={getFieldClass("email")} placeholder="Email" />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="form-group col-6">
                        <input type='password' name="password" value={formData.password} onChange={handleChange} className={getFieldClass("password")} placeholder="Password" />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>
                    </div>
                    <div className='row'>
                      <div className="form-group col-6">
                        <input type="text" name="cellNumber" value={formData.cellNumber} onChange={handleChange} className={getFieldClass("cellNumber")} placeholder="Phone Number" />
                        {errors.cellNumber && <div className="invalid-feedback">{errors.cellNumber}</div>}
                      </div>
                      <div className="form-group col-6">
                        <input type="text" name="username" value={formData.username} onChange={handleChange} className={getFieldClass("username")} placeholder="User Name" />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" name="address" value={formData.address} onChange={handleChange} className={getFieldClass("address")} placeholder="Address" />
                      {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    <div className="field text-center mt-3">
                      <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
