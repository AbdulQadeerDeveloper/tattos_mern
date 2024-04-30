import React from 'react'
import Header from '../../../shared/component/header'
import Footer from '../../../shared/component/footer'
import LoginAuthenticator from '../../../auth/container/loginAuthenticator'


const LoginComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <LoginAuthenticator />
            <Footer />
        </React.Fragment>
    )
}

export default LoginComponent