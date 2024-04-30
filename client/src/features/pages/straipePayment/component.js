import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import StripePayment from '../../tattoos/component/cardPayment/strape'

const PaymentGateComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <StripePayment />
            <Footer />

        </React.Fragment>
    )
}

export default PaymentGateComponent