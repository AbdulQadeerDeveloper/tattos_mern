import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import Checkout from '../../tattoos/component/checkOut/checkout'

const PaymentComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <Checkout />
            <Footer />

        </React.Fragment>
    )
}

export default PaymentComponent