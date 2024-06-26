import React from 'react'
import { Link } from 'react-router-dom'
import AddTattooForm from '../../features/tatt00Table/component/addTattooForm'






function RightSideTattoo() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active"> Add Tattoos</li>
                    </ol>

                    <div className="row m-b-20 btn-holder">
                        <div className="col-md-12">
                            

                        </div>
        
                    </div>
                    <div className="col-md-12">
                        <AddTattooForm />

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