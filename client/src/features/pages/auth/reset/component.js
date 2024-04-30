import React from 'react'
import Header from '../../../shared/component/header'
import Footer from '../../../shared/component/footer'
import ResetAuthenticator from '../../../auth/container/resetAuthenticator'


const ResetPasswordComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <ResetAuthenticator />
            <Footer />
        </React.Fragment>
    )
}

export default ResetPasswordComponent