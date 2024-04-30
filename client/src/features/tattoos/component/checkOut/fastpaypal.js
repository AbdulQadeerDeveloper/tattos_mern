import React from 'react'
import { Link } from "react-router-dom"
import fastPaypal from "../asserts/fastPay.webp"
function BasicFastPaypal() {
    return (

        <div className='container p-0'>
           
            <Link to="/fastPay" className='fastPaypal'>
                <img src={fastPaypal} />
                <div className='payment'><h2 style={{ color: "#2f1c6a" }}>PayFast</h2>
                </div>
            </Link>
        </div>
    )
}

export default BasicFastPaypal