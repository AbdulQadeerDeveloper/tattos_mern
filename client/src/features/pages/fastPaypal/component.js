import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import FastPayPalPayment from '../../tattoos/component/cardPayment/fastPay'

const PaymentFastGateComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <FastPayPalPayment />
            <Footer />

        </React.Fragment>
    )
}

export default PaymentFastGateComponent