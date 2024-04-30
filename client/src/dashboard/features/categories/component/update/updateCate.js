import React from 'react'
import { Link } from 'react-router-dom'
import Update from './update'


function UpdateCate() {
    return (
        <React.Fragment>

            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid">
                    <ol className="breadcrumb d-flex justify-content-between">
                        <div>
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>

                        </div>
                       
                    </ol>


                    <div className="card mb-3">

                        <Update />

                    </div>
                </div>


                <Link className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </Link>



            </div>

        </React.Fragment>
    )
}

export default UpdateCate