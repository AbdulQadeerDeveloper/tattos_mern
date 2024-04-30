import React from 'react'
import { Link } from 'react-router-dom'
import UpdatePlacement from './update'




function UpdatePlacementTattoos() {
    return (
        <div>
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
                        <UpdatePlacement />
                    </div>
                </div>


                <Link className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </Link>



            </div>
        </div>
    )
}

export default UpdatePlacementTattoos