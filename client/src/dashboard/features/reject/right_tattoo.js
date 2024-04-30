import React from 'react'
import { Link } from 'react-router-dom'
import Table from './table'

function RightSideReject() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px',paddingBottom:"40px" }}>
                <div className="container-fluid" style={{paddingBottom:"40px" }}>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Reject Tattoo</li>
                    </ol>

                    <div className="row m-b-20 btn-holder">
                        <div className="col-md-12" style={{display:'flex',justifyContent:"end"}}>

                           <Link to='/tattoo'> <button className="btn pull-right">Go to back</button></Link>
          
                        </div>
                    </div>
                    <div className="card mb-3">

                        <Table/>
                        
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

export default RightSideReject