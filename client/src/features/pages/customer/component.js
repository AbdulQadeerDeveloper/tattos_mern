import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import CustomerForm from '../../customerBooking/container/customerBooking'

const CustomerComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <CustomerForm />
            <Footer />
        </React.Fragment>
    )
}

export default CustomerComponent