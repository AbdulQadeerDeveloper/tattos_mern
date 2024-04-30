import React from 'react'
import Header from '../../shared/component/header'
import PaymentSuccess from '../../tattoos/component/paymentPlain/paymentSuccess'

const PaymentSuccessComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='container mt-5'>
                <PaymentSuccess />
            </div>
        </React.Fragment>
    )
}

export default PaymentSuccessComponent