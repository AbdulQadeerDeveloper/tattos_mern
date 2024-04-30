import React from 'react'
import { Link } from 'react-router-dom'
import TattooTable from '../container/addTattoos'





function RightSideTattoo() {
    return (
        <div>
            <div className="content-wrapper" style={{ paddingTop: '60px', paddingBottom:"40px" }}>
                <div className="container-fluid" style={{paddingBottom:"40px" }}>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Tattoos</li>
                    </ol>

                    <div className="row m-b-20 btn-holder">
                        <div className="col-md-12" style={{display:'flex',justifyContent:"end", marginLeft:"auto", width:"13%"}}>
                           <Link to="/add-tattoos" className="btn pull-right">Create Tattoo</Link> 
                        </div>
                    </div>
                    <div className="card mb-5">
                        <TattooTable />
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