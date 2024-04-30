import React from 'react'
import Header from '../../../shared/component/header'
import Footer from '../../../shared/component/footer'
import ForgotAuthenticator from '../../../auth/container/forgotAuthenticator'


const ForgotPasswordComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <ForgotAuthenticator />
            <Footer />
        </React.Fragment>
    )
}

export default ForgotPasswordComponent