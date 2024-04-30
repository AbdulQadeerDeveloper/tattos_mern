import React from 'react'
import Header from '../../../shared/component/header'
import Footer from '../../../shared/component/footer'
import RegisterAuthenticator from '../../../auth/container/registerAuthenticator'


const RegisterComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <RegisterAuthenticator />
            <Footer />
        </React.Fragment>
    )
}

export default RegisterComponent