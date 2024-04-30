import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../asserts/logo-white.png";
import { useDispatch, useSelector } from 'react-redux';
import { MdDashboard, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { logoutUser } from '../../features/auth/reducers/action';
import { IoIosNotifications } from "react-icons/io";
import { IoIosBody } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { FaCheck, FaHeart, FaHourglassStart, FaPlus, FaSignOutAlt, FaTimes, FaUser, FaUsers } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaBars } from 'react-icons/fa';
function SideBar() {
    const [isToggled, setIsToggled] = useState(false);
    const [collapseComponents, setCollapseComponents] = useState(false);
    const auth = useSelector((state) => state.authReducer.user);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());

    };
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isToggled ? "sidenav-toggled" : ""}`} id="mainNav">
                <Link className="navbar-brand" to="/dashboard">
                    <img alt="Logo" src={logo} width="200" />
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars color="white" size={20} />
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink className="nav-link" to="/dashboard">
                                <MdDashboard style={{ color: "white", fontSize: "15px", textDecoration: "none" }} />
                                <Link to='/dashboard' id='side-side'> Dashboard</Link>

                            </NavLink>
                        </li>

                        {/* Tattoos Link */}
                        <li className="nav-item" title="MdExpandMore">
                            <a className="nav-link nav-link-collapse" onClick={() => setCollapseComponents(!collapseComponents)}>
                                <FaHeart style={{ color: "white", fontSize: "15px" }} />
                                <span id='side-side'>Tattoos</span>
                                {collapseComponents ? <MdExpandMore style={{ float: "right", margin: "5px" }} /> : <MdExpandMore style={{ float: "right", margin: "5px" , color:"white", fontSize:"20px"}} />}
                            </a>
                            <ul className={`sidenav-second-level ${collapseComponents ? 'show' : 'collapse'}`} id="collapseComponents">
                                <li>
                                    <NavLink className="nav-link" to="/tattoo">
                                        <FaPlus style={{ color: "white", fontSize: "20px" }} />
                                        <span id='side-side'>Add Tattoos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/tattoos-approved">
                                        <FaCheck style={{ color: "white", fontSize: "20px" }} />
                                        <span id='side-side'>Approved Tattoos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/tattoos-pending">
                                        <FaHourglassStart style={{ color: "white", fontSize: "20px" }} />
                                        <span id='side-side'>Pending Tattoos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/tattoos-reject">
                                        <FaTimes style={{ color: "white", fontSize: "20px" }} />
                                        <span id='side-side'>Rejected Tattoos</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Body Placement Link */}
                        <li className="nav-item" data-toggle="tooltip" data-placement="right">
                            <NavLink className="nav-link">
                                <IoIosBody style={{ color: "white", textDecoration: "none", fontSize: "20px" }} />
                                <Link to="/tattoos-placement" id='side-side'>Placement</Link>
                            </NavLink>
                        </li>

                        {/* Categories Link */}
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" >
                            <NavLink className="nav-link">
                                <MdOutlineCategory style={{ color: "white", fontSize: "20px", textDecoration: "none" }} />
                                <Link to="/tattoos-category" id='side-side'>Categories</Link>
                            </NavLink>
                        </li>
                        {/* users Link */}
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" >
                            <NavLink className="nav-link">
                                <FaUsers style={{ color: "white", fontSize: "20px", textDecoration: "none" }} />
                                <Link to="/users" id='side-side'>Users</Link>
                            </NavLink>
                        </li>



                    </ul>


                    {/* Profile Dropdown */}
                    <div style={{
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                    }}>
                        <div className="profile-info" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleDropdown}>
                            <span style={{
                                background: 'red',
                                color: 'white',
                                fontSize: '26px',
                                border: '0',
                                borderRadius: '100%',
                                padding: '5px 16px',
                                textTransform: "uppercase"
                            }}>
                                {auth?.username.charAt(0)}
                            </span>
                        </div>

                        {isDropdownOpen && (
                            <div style={{ position: 'absolute', width: '210px', height: "auto", top: '60px', right: 0, backgroundColor: 'black', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
                                <ul style={{ listStyleType: 'none', padding: 20, margin: 0 }}>
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
                                        <Link to='/tattoos-plain'><RiSecurePaymentLine style={{ marginBottom: '10px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>Payment Plain</span></Link>
                                    </li>
                                    <li style={{ marginBottom: '10px', color: 'white' }}>
                                        <Link onClick={handleLogout} ><FaSignOutAlt style={{ marginLeft: '5px', color: 'white', textDecoration: "none" }} /><span style={{ marginLeft: '20px', color: 'white' }}>Logout</span></Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;
