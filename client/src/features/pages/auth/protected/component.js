import React from 'react'
import Header from '../../../shared/component/header'
import Footer from '../../../shared/component/footer'
import ProtectedRoute from '../../../../auth/components/protectedRoute'

const PrivateComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <ProtectedRoute />
            <Footer />
        </React.Fragment>
    )
}

export default PrivateComponent