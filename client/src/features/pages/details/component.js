import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import ArtistUploadContainer from '../../artistDetails/container/artisTattoos'

const DetailsComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <ArtistUploadContainer />
            <Footer />
        </React.Fragment>
    )
}

export default DetailsComponent