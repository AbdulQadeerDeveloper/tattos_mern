import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import TattooDetailContainer from '../../about/container/tattoos'

const TattooComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <TattooDetailContainer/>
            <Footer />

        </React.Fragment>
    )
}

export default TattooComponent