import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <React.Fragment>
            <div className="container-fluid fh5co_footer_right_reserved" id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 py-4 Reserved">© Copyright 2025, All rights reserved.</div>
                        <div className="col-12 col-md-6 spdp_right py-4">
                            <div className="footer_mediya_icon">
                                <div className="text-center d-inline-block">
                                    <Link className="fh5co_display_table_footer1" style={{ color: '#0077B5' }}>
                                        <div><FaLinkedinIn /></div>
                                    </Link>
                                </div>
                                <div className="text-center d-inline-block">
                                    <Link className="fh5co_display_table_footer2" style={{ color: '#1DA1F2' }}>
                                        <div><FaTwitter /></div>
                                    </Link>
                                </div>
                                <div className="text-center d-inline-block">
                                    <Link className="fh5co_display_table_footer3" style={{ color: '#1877F2' }}>
                                        <div><FaFacebookF /></div>
                                    </Link>
                                </div>
                                <div className="text-center d-inline-block">
                                    <Link className="fh5co_display_table_footer4" style={{ color: '#DB4437' }}>
                                        <div><FaGooglePlusG /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;
