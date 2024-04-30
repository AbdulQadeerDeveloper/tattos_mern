import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import UploadTattoo from '../../uploadTattoo/component/uploadTattoo'

const UploadComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <UploadTattoo />
            <Footer />
        </React.Fragment>
    )
}

export default UploadComponent