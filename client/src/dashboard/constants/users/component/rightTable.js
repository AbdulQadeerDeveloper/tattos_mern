import React from 'react'
import { Link } from 'react-router-dom'
import UserTable from './userTable';

function RightSideUsers() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid" style={{paddingBottom:"40px" }}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Users</li>
                    </ol>

                
                    <div className="row m-b-20 btn-holder">
                        <div className="col-md-12" style={{ width: "10%", display: "flex", marginLeft: "auto" }}>
                            <Link to="/user" data-toggle="modal" data-target="#NT" className="btn pull-right">Add User</Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <UserTable />
                    </div>

                </div>

                <footer className="sticky-footer">
                    <div className="container">
                        <div className="text-center">
                            <small>Copyright © Your Website 2025</small>
                        </div>
                    </div>
                </footer>

                <Link className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </Link>



            </div>
        </div>
    )

}
export default RightSideUsers;