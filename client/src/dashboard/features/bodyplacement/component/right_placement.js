import React from 'react'

import { Link } from 'react-router-dom'
import TattooDetailContainer from '../container/addTable'
import AddPlacementForm from './addForm'



function RightSidePlacement() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px' }}>
                <div className="container-fluid">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>       
                        </li>
                        <li className="breadcrumb-item active">Tattoo Placements</li>
                    </ol>

                    <div className="row m-b-20 btn-holder">
                        <div className="col-md-12" style={{display:'flex',justifyContent:"end"}}>

                            <button data-toggle="modal" data-target="#NT" className="btn pull-right">Create Placement</button>
          
                        </div>
                    </div>
                    <div className="card mb-3">

                        <TattooDetailContainer/>
                       
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
                
                <AddPlacementForm/>
              
            </div>
        </div>
    )
}

export default RightSidePlacement