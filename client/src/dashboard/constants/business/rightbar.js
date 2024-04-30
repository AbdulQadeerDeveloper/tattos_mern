import React from 'react'
import { Link } from 'react-router-dom'
import BusinessForm from '../../features/business/container/businessContainer'


function RightSideTattoo() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Add Business details</li>
                    </ol>

                
                    <div className="row m-pt-5 mt-5 btn-holder">
                       
                        <BusinessForm />
                    </div>
                    
                </div>

                <footer className="sticky-footer" style={{background:"black", color:"white"}}>
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