import React from 'react'
import { FaStar } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import BasicPlain from './paymentPlain/basicPlain';
import BusinessPlain from './paymentPlain/businessPlain';
import PremiumPlain from './paymentPlain/premiumPlain';
import { Link } from 'react-router-dom';
function Booking() {
    return (
        <React.Fragment>
            <div className='container-fluid p-0'>
                <div className='booking-banner' style={{ width: "100%" }}>
                    <img style={{ width: "100%", height: "300px" }} src='https://t4.ftcdn.net/jpg/01/96/69/87/360_F_196698744_4f6y7Iyj059zbsyVm7m2r0y5G8WbPSKJ.jpg' />
                </div>
                <div className='container' style={{ position: "relative", bottom: "80px" }}>
                    <div className='row'>
                        <div className='col-md-4 mb-3'>
                            <div className='contact-banner' style={{ background: "#e5e5e5", height: "200px", borderRadius: "20px", padding: '36px' }}>
                                <div style={{ display: "flex", }} >
                                    <div className='tattoosImages'>
                                        <img src="https://d1kq2dqeox7x40.cloudfront.net/images/profile_images/20230223_YnV2cmO0bc7P2wQ.jpg?h=96&w=96" style={{ borderRadius: "100%", width: "50px" }} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontStyle: "5px !important", color: 'black', textDecoration: "none", padding: "0px", marginLeft: "20px" }}>Hannah Aitchison</h4>
                                        <span style={{ marginLeft: "20px" }}>Dr. Tattoos artisit</span>
                                    </div>

                                </div>

                                <div className='pt-5'>
                                    <FaStar style={{ color: "green" }} />
                                    <FaStar style={{ color: "green" }} />
                                    <FaStar style={{ color: "green" }} />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    &nbsp;4.5
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 mb-5 pt-4' id='booking-booking'>
                            <Button type='submit' style={{ width: "50%", background: "black", border: "none" }}><Link to="/contact" style={{color:"white"}}>Contact</Link></Button>
                            <Button type='submit' style={{ width: "50%", background: "black", border: "none" }}><Link to="/customer-details" style={{color:"white"}}>Booking Now</Link></Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='text-center'>
                    <strong className='m-auto'>
                        <h1 style={{
                            color: 'black',
                            fontWeight: '600',
                            paddingBottom: '10px',
                            borderBottom: "1px solid #dee6ff"

                        }}>Pick Your Perfect Plan</h1>

                    </strong>
                </div>

                <div className='row' style={{paddingTop: '40px'}}>
                    <div className='col-md-4'>
                        <BasicPlain />
                    </div>
                    <div className='col-md-4'>

                        <BusinessPlain />
                    </div>
                    <div className='col-md-4'>

                        <PremiumPlain />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Booking