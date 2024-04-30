import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import ContactAuthenticator from '../../contact/container/authContact'

const ContactComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <ContactAuthenticator />
            <Footer />
        </React.Fragment>
    )
}

export default ContactComponent