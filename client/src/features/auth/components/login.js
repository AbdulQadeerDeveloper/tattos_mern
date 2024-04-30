import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import chooseFileImage from './asserts/userlogo.png';
import bannerImage from './asserts/PngItem_4726291.png';
import { loginUser } from '../reducers/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // validation for the users field

    if (!formData.email) {
      formIsValid = false;
      newErrors["email"] = "Email is required.";
    }

    if (!formData.password) {
      formIsValid = false;
      newErrors["password"] = "Password is required.";
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
      await dispatch(loginUser(formData));;
      toast.success("User login successfully!");
      // navigate("/login");
    } catch (error) {
      toast.error("An error occurred while registering the user.");
    }
  };

  // const loginWithGoogle = () => {
  //   window.location.href = API_END_POINTS.USER_GOOGLE_LOGIN;
  //   swal("Google Login", "You are being redirected to Google for login.", "info");
  // };


  // Helper function to determine the class based on field validity
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
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-7' id='loginImages'>
            <img src={bannerImage} alt="Banner" style={{ marginTop: '90px', width: '90%' }} />
          </div>
          <div className='col-md-5' style={{ marginTop: '40px' }} id='logincol5'>
            <div className="modal-content mt-5" id="fragemt_form">
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className='text-center'>
                    <img src={chooseFileImage} alt="Uploaded" style={{ width: '100px', height: '100px', borderRadius: '100px' }} />
                  </div>
                  <br />
                  <div className="form-group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={getFieldClass("email")} placeholder="Email" />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <input type='password' name="password" value={formData.password} onChange={handleChange} className={getFieldClass("password")} placeholder="Password" />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="field">
                    <input type="submit" value="Sign In" />
                  </div>
                </form>
                {/* <div className="links mt-3">
                  <div className="instagram" onClick={loginWithGoogle}>
                    &nbsp;&nbsp;   <FaGoogle /><span> &nbsp;&nbsp;Google</span>
                  </div>
                </div> */}
                <div className='col-md-10 mt-3'>

                  <Link to="/register">Signup new account</Link><br/>
                  <Link to="/forgot-password">Forgot Password?</Link>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
