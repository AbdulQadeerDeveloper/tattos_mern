import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import Booking from '../../tattoos/component/booking'

const BookingComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <Booking />
            <Footer />
        </React.Fragment>
    )
}

export default BookingComponent