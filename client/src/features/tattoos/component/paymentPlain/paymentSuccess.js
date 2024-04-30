import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';


function PaymentSuccess() {

    return (
        <div className='container text-center mt-5 pt-5' id='fragemt_form'>

            <div className='icon mt-5'>
                <span className='markIcon'><IoIosCheckmarkCircle /></span>
            </div>
            <h1>Payment Done!</h1>
            <p>Thank you for completing your secure online payment <br/> <strong>Have a good day.</strong></p>



        </div>

    );
}

export default PaymentSuccess;
