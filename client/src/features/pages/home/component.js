import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import TattooBannerContainer from '../../home/containers/homeBanner'
import TattooSliderContainer from '../../home/containers/homeSlider'
import TattooGalleryContainer from '../../home/containers/homeGallery'
import HomeVideoSlider from '../../home/components/video'
import Slider from '../../home/components/slider'

const Homecomponent = () => {
    return (
        <React.Fragment>
            <Header />
            <TattooBannerContainer />
            <TattooSliderContainer />
            <TattooGalleryContainer />
            <Slider/>
            <HomeVideoSlider/>

            <Footer />
        </React.Fragment>
    )
}

export default Homecomponent