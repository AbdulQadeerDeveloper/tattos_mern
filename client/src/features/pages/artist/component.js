import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import TattooArtistContainer from '../../artist/container/tattoosItem'

const ArtistComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <TattooArtistContainer />
            <Footer />
        </React.Fragment>
    )
}

export default ArtistComponent