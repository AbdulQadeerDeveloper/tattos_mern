import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    
    return (
        <div>
            <div class="container-fluid fh5co_footer_right_reserved" id='footer'>
                <div class="container">
                    <div class="row  ">
                        <div class="col-12 col-md-6 py-4 Reserved"> © Copyright 2018, All rights reserved. </div>
                        <div class="col-12 col-md-6 spdp_right py-4">
                            <div class="footer_mediya_icon">
                                <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                                    <div class="fh5co_verticle_middle"><i class="fa fa-linkedin"></i></div>
                                </a></div>
                                <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                                    <div class="fh5co_verticle_middle"><i class="fa fa-google-plus"></i></div>
                                </a></div>
                                <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                                    <div class="fh5co_verticle_middle"><i class="fa fa-twitter"></i></div>
                                </a></div>
                                <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                                    <div class="fh5co_verticle_middle"><i class="fa fa-facebook"></i></div>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gototop js-top">
                <Link to="/" class="js-gotop"><i class="fa fa-arrow-up"></i></Link>
            </div>
        </div>
    )
}

export default Footer