import React from 'react'
import HomeBanner from '../containers/homeBanner'
import HomeSlider from '../containers/homeSlider'
import HomeGallery from '../containers/homeGallery'
import HomeVideoSlider from '../components/video'
import TattooSlider from '../containers/slider'
function Home() {
  return (
    <div>
      <HomeVideoSlider />
      <HomeBanner />
      <HomeSlider />
      <TattooSlider/>
      <HomeGallery />


    </div>
  )
}

export default Home