import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../reducers/action';
import chooseFileImage from './asserts/userlogo.png';
import bannerImage from './asserts/PngItem_4726291.png';
import { Link, useNavigate } from 'react-router-dom'; 
import swal from 'sweetalert';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password))
      .then((response) => {
        swal("Success!", "Your password has been reset successfully. Please log in with your new password.", "success")
          .then(() => {
            navigate('/login');
          });
      })
      .catch((error) => {
        // Handle failure scenario (e.g., email not found in the database)
        swal("Failed!", "The email provided does not match any account in our records. Please try again.", "error");
      });
  };
  return (
    <React.Fragment>
   
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-7'>
            <img src={bannerImage} alt="Banner" style={{ marginTop: '90px', width: '90%' }} />
          </div>
          <div className='col-md-5'>
            <div className="modal-content mt-5" id="fragemt_form">
              <div className="modal-body">

                <form onSubmit={handleSubmit}>
                  <div className='text-center'>
                    <img src={chooseFileImage} alt="Uploaded" style={{ width: '100px', height: '100px', borderRadius: '100px' }} />
                  </div>
                  <div className="form-group">

                    <label htmlFor="password">New Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="field  mt-3">
                    <input type="submit" value="Reset Password" />
                  </div>

                  <div className="form-group mt-3">
                    <div className='row'>
                      <div className='col-md-10 mt-3'>
                        <Link to="/register">Signup new account</Link>
                      </div>
                      <div className="col-md-2 field">
                        <Link to="/register">Next</Link>
                      </div>
                    </div>
                  </div>
                </form>



              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
