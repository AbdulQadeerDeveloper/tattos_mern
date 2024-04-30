import React from 'react'

import HomeBanner from '../home/containers/homeBanner'

import HomeSlider from '../home/containers/homeSlider'
import HomeSlider_2 from '../home/containers/homeSlider_2'
import Videro from '../home/containers/videro'
import Header from '../shared/component/header'
import Footer from '../shared/component/footer'




function HomeComponent() {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <HomeSlider/>
      <HomeSlider_2/>
      <Videro/>
      <Footer/>
    </div>
  )
}

export default HomeComponent