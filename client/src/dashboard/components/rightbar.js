import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../reducer/component/form'







function RightSideTattoo() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Add User</li>
                    </ol>

                  
                    <div className="col-md-12 mt-5">
                        <Form />

                    </div>


                </div>


                <footer className="sticky-footer" style={{ background: "black", color: "white" }}>
                    <div className="container">
                        <div className="text-center">
                            <small>Copyright © Your Website 2025</small>
                        </div>
                    </div>
                </footer>





            </div>
        </div>
    )
}

export default RightSideTattoo