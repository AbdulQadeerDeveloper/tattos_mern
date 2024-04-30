import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './asserts/logo.png';
import './Header.css';
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoIosNotifications, IoMdBusiness } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { logoutUser } from '../../auth/reducers/action';
import { FaLock } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
   alert("Are you show want do to logout !");
  };

  return (
    <header className='header'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="header-logo" />
              </Link>
              <button className="navbar-toggler" type="button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`navbar-collapse ${isNavbarOpen ? 'show' : 'collapse'}`}>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" style={{color:"red"}}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories">Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/artists">Artists</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tattoos">Tattoos</Link>
                  </li>

                  {auth ? (
                    <div style={{ position: 'relative' }}>
                      <div className="profile-info" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textTransform: "uppercase" }} onClick={toggleDropdown} data-bs-toggle="tooltip" data-bs-placement="bottom" title={auth?.username}>
                        <span style={{
                          background: 'red',
                          color: 'white',
                          fontSize: '26px',
                          border: '0',
                          borderRadius: '100%',
                          padding: '4px 15px',
                          textTransform: "uppercase"
                        }}>
                          {auth?.username.charAt(0)}
                        </span>
                      </div>

                      {
                        isDropdownOpen && (
                          <div>
                            <ul style={{ listStyleType: 'none', margin: 0 }}>
                              {/* Always show the logout option */}
                              <div style={{ position: 'absolute', width: '230px', height: "auto", top: '57px', right: 0, backgroundColor: 'black', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
                                <ul style={{ listStyleType: 'none', padding: 20, margin: 0 }}>
                                  <li style={{ marginBottom: '10px', color: 'white' }}>
                                    <Link onClick={handleLogout} ><FaSignOutAlt style={{ marginLeft: '5px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white' }}>Logout</span></Link>
                                  </li>
                                </ul>
                              </div>


                              {/* Additional options for admin users */}
                              {auth.role === 'admin' && (
                                <>
                                  <div style={{ position: 'absolute', width: '230px', height: "auto", top: '55px', right: 0, backgroundColor: 'black', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
                                    <ul style={{ listStyleType: 'none', padding: 20, margin: 0 }}>
                                      <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link to="/dashboard">
                                          <MdSpaceDashboard style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} />
                                          <span style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>Dashboard</span></Link>
                                      </li>
                                      <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link to="/user">
                                          <FaUser style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} />
                                          <span style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>My Profile</span></Link>
                                      </li>
                                      <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link to='/'><IoIosNotifications style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} />
                                          <span style={{ marginLeft: '20px', color: 'white' }}>Notification</span></Link>
                                      </li>
                                      <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link to='/business'><IoMdBusiness style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white' }}>Business Plain</span></Link>
                                      </li>
                                      <li style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }}>
                                        <Link to='/'><RiSecurePaymentLine style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>Payment Plain</span></Link>
                                      </li>
                                      <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link onClick={handleLogout} ><FaSignOutAlt style={{ marginLeft: '5px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white' }}>Logout</span></Link>
                                      </li>
                                    </ul>
                                  </div>
                                </>
                              )}
                            </ul>
                          </div>
                        )
                      }

                    </div>
                  ) : (
                    <li className="nav-item" id="header-login">
                      <Link className="nav-link" to="/login">
                        <FaLock />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
